// Function to fetch and parse Medium RSS feed
export const fetchMediumPosts = async (): Promise<
  { title: string; url: string }[]
> => {
  try {
    const response = await fetch(
      "https://medium.com/feed/@ngtzekean"
    );
    const xml = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");

    const items = Array.from(doc.querySelectorAll("item"));
    return items.map((item) => ({
      title: item.querySelector("title")?.textContent || "Untitled",
      url: item.querySelector("link")?.textContent || "#",
    }));
  } catch (error) {
    console.error("Error fetching Medium blog posts:", error);
    return [];
  }
};

export const renderBlogPosts = async (): Promise<string> => {
  const blogPosts = await fetchMediumPosts();
  console.log("Blog Posts:", blogPosts);

  return `
<section id="blog" class="max-w-7xl mx-auto px-6 py-12 bg-white">
  <h2 class="text-3xl font-semibold mb-8 text-gray-800">Blog Posts</h2>
  <div class="space-y-6">
    ${blogPosts
      .map(
        (post) => `
      <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <a href="${post.url}" target="_blank" class="text-xl font-bold text-blue-600 hover:underline">${post.title}</a>
      </div>
    `
      )
      .join("")}
  </div>
</section>
`;
};
