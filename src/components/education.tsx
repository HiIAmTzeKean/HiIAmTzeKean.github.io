export const renderEducation = (educationData: {
  university: string;
  duration: string;
  gpa: string;
  degree: string;
  specialisation: string;
  minor: string;
  businessModules: string[];
  computingModules: string[];
  awards: string[];
  exchangeUniversities: string[];
  hackathons: string[];
  roles: string[];
  activities: string[];
}): string => {
  return `
    <section id="education" class="py-12 px-6 sm:px-8 lg:px-16 bg-white shadow-md rounded-lg">
      <!-- Title -->
      <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-8">Education</h2>

      <!-- University Information -->
      <div class="mb-10">
        <h3 class="text-3xl font-semibold text-gray-900">${
          educationData.university
        }</h3>
        <p class="text-lg text-gray-600 italic mb-2">${
          educationData.duration
        }</p>
        <p class="text-lg text-gray-700">GPA: <span class="font-semibold">${
          educationData.gpa
        }</span></p>
        <p class="text-lg text-gray-700">Degree: <span class="font-semibold">${
          educationData.degree
        }</span></p>
        <p class="text-lg text-gray-700">Specialisation: <span class="font-semibold">${
          educationData.specialisation
        }</span> | Minor: <span class="font-semibold">${
    educationData.minor
  }</span></p>
      </div>

      <!-- Notable Business and Computing Modules -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h4 class="text-xl font-semibold text-gray-800 mb-3">Notable Business Modules</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700">
            ${educationData.businessModules
              .map((module: string) => `<li>${module}</li>`)
              .join("")}
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-semibold text-gray-800 mb-3">Notable Computing Modules</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700">
            ${educationData.computingModules
              .map((module: string) => `<li>${module}</li>`)
              .join("")}
          </ul>
        </div>
      </div>

      <!-- Awards Section -->
      <div class="mb-10">
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Awards</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          ${educationData.awards
            .map((award: string) => `<li>${award}</li>`)
            .join("")}
        </ul>
      </div>

      <!-- Exchange Universities -->
      <div class="mb-10">
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Exchange Universities</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          ${educationData.exchangeUniversities
            .map((university: string) => `<li>${university}</li>`)
            .join("")}
        </ul>
      </div>

      <!-- Hackathons Section -->
      <div class="mb-10">
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Hackathons</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          ${educationData.hackathons
            .map((hackathon: string) => `<li>${hackathon}</li>`)
            .join("")}
        </ul>
      </div>

      <!-- Roles Section -->
      <div class="mb-10">
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Roles</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          ${educationData.roles
            .map((role: string) => `<li>${role}</li>`)
            .join("")}
        </ul>
      </div>

      <!-- Activities Section -->
      <div>
        <h4 class="text-xl font-semibold text-gray-800 mb-3">Activities</h4>
        <ul class="list-disc pl-5 space-y-2 text-gray-700">
          ${educationData.activities
            .map((activity: string) => `<li>${activity}</li>`)
            .join("")}
        </ul>
      </div>
    </section>
  `;
};
