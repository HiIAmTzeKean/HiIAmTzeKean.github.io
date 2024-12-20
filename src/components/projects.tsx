export const renderProjects = async (
  projectsData: { name: string; description: string; image: string; url: string }[]
): Promise<string> => {
  // Function to fetch top GitHub projects
  const fetchGitHubProjects = async (): Promise<
    { name: string; description: string; url: string; stars: number }[]
  > => {
    const query = `https://api.github.com/search/repositories?q=user:HiIAmTzeKean&sort=stars&order=desc&per_page=9`;

    try {
      const response = await fetch(query);
      const data = await response.json();

      if (data.errors) {
        console.error("Error fetching GitHub repositories:", data.errors);
        return [];
      }

      // Map the response to the desired structure
      const topRepos = data.items.map((repo: any) => ({
        name: repo.name,
        description: repo.description || "No description available", // Handle null description
        url: repo.html_url,
        stars: repo.stargazers_count,
      }));

      return topRepos;
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      return [];
    }
  };


  // Fetch GitHub projects
  const gitHubProjects = await fetchGitHubProjects();

  // Generate HTML for Featured Projects
  const featuredProjects = projectsData
    .map(
      (project) => `
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <img src="${project.image}" alt="${project.name}" class="w-full h-56 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-bold text-gray-800">
          <a href="${project.url}" target="_blank" class="text-blue-600 hover:underline">
            ${project.name}
          </a>
        </h3>
        <p class="text-gray-700">${project.description}</p>
      </div>
    </div>
  `
    )
    .join("");

  // Generate HTML for GitHub Projects
  const gitHubProjectsHTML = gitHubProjects
    .map(
      (project) => `
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <div class="p-4">
        <h3 class="text-xl font-bold text-gray-800">
          <a href="${project.url}" target="_blank" class="text-blue-600 hover:underline">
            ${project.name}
          </a>
        </h3>
        <p class="text-gray-700 mb-2">${project.description}</p>
        <p class="text-sm text-gray-500">⭐ ${project.stars} stars</p>
      </div>
    </div>
  `
    )
    .join("");

  // Combine the sections
  return `
    <section id="projects" class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-semibold mb-6 text-gray-800">Featured Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        ${featuredProjects}
      </div>
    </section>

    <section id="github-projects" class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-semibold mb-6 text-gray-800">Top GitHub Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        ${gitHubProjectsHTML}
      </div>
    </section>
  `;
};
