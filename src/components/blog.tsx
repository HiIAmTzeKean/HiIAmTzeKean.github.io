const RSS2JSON_URL = "https://api.rss2json.com/v1/api.json";
const FEED_URL = "https://medium.com/feed/@ngtzekean";
const DEFAULT_IMAGE = "public/photo.jpeg";
// https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ngtzekean

export const fetchMediumPosts = async (): Promise<
  { title: string; url: string; image: string; date: string }[]
> => {
  try {
    const response = await fetch(
      `${RSS2JSON_URL}?rss_url=${encodeURIComponent(FEED_URL)}`
    );
    const data = await response.json();

    return data.items.map((item: any) => ({
      title: item.title,
      url: item.link,
      image: item.thumbnail || DEFAULT_IMAGE, // Use thumbnail or fallback image
      date: new Date(item.pubDate).toLocaleDateString(), // Format the publication date
    }));
  } catch (error) {
    console.error("Error fetching Medium blog posts:", error);
    return [];
  }
};

export const renderBlogPosts = async (): Promise<string> => {
  const blogPosts = await fetchMediumPosts();

  // Sort posts by publication date (newest first)
  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Take the top 8 posts
  const topPosts = sortedPosts.slice(0, 8);

  console.log("Top Blog Posts:", topPosts);

  return `
<section id="blog" class="max-w-7xl mx-auto px-6 py-12 bg-white">
  <h2 class="text-3xl font-semibold mb-8 text-gray-800">Blog Posts</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    ${topPosts
      .map(
        (post) => `
      <a 
        href="${post.url}" 
        target="_blank" 
        class="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div class="flex">
          <div class="flex-shrink-0 w-24 h-24 mr-4">
            <img
              src="${post.image}"
              alt="${post.title}"
              class="w-full h-full object-cover rounded-md"
            />
          </div>
          <div class="flex-grow">
            <h3 class="text-xl font-bold text-blue-600 hover:underline">${post.title}</h3>
            <p class="text-sm text-gray-500 mt-1">Published on: ${post.date}</p>
          </div>
        </div>
      </a>
    `
      )
      .join("")}
  </div>
</section>
`;
};
