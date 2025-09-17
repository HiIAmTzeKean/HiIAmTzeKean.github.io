
export const renderNews = (
  newsData: {
    date: string;
    title: string;
    description: string;
  }[]
): string => `
<section class="mt-8 mb-8 p-6 bg-blue-50 rounded-lg shadow">
  <h3 class="text-2xl font-semibold text-blue-900 mb-4">Latest News</h3>
  <ul class="space-y-4">
    ${newsData
      .map(
        (item) => `
      <li class="border-b pb-4 last:border-b-0">
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">${new Date(item.date).toLocaleDateString()}</span>
          <span class="font-bold text-blue-800">${item.title}</span>
        </div>
        <p class="mt-2 text-gray-700">${item.description}</p>
      </li>
    `
      )
      .join("")}
  </ul>
</section>
`;
