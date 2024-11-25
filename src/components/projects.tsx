export const renderProjects = (projectsData: any[]): string => {
  const projects = projectsData
    .map(
      (project) => `
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <img src="${project.image}" alt="${project.name}" class="w-full h-56 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-bold text-gray-800">${project.name}</h3>
        <p class="text-gray-700">${project.description}</p>
      </div>
    </div>
  `
    )
    .join("");

  return `
    <section id="projects" class="max-w-7xl mx-auto px-6 py-12">
      <h2 class="text-3xl font-semibold mb-6 text-gray-800">My Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        ${projects}
      </div>
    </section>
  `;
};
