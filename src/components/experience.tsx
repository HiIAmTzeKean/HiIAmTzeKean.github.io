export const renderExperience = (
  experienceData: {
    company: string;
    role: string;
    duration: string;
    supervisor: string;
    description: string[];
  }[]
): string => `
<section id="experience" class="max-w-7xl mx-auto px-6 py-12 bg-white">
  <h2 class="text-3xl font-semibold mb-8 text-gray-800">Experience</h2>
  <div class="space-y-8">  <!-- Adds space between each card -->
    ${experienceData
      .map(
        (exp) => `
      <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 class="text-xl font-bold text-blue-600">${exp.company}</h3>
        <p class="text-lg text-gray-700">${exp.role}</p>
        <p class="text-sm text-gray-500 mb-4">${exp.duration}</p>
        <p class="text-sm text-gray-500 mb-4"><strong>Supervisor:</strong> ${
          exp.supervisor
        }</p> <!-- Supervisor info -->
        <ul class="list-disc pl-5 text-gray-700">
          ${exp.description.map((point) => `<li>${point}</li>`).join("")}
        </ul>
      </div>
    `
      )
      .join("")}
  </div>
</section>
`;
