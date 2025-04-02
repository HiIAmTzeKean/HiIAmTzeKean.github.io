export const renderEducation = (
  educationData: {
    university: string;
    duration: string;
    gpa?: string;
    degree: string;
    specialisation?: string;
    minor?: string;
  }[]
): string => {
  return `
    <section id="education" class="max-w-7xl mx-auto px-6 py-12 bg-white">
      <h2 class="text-3xl font-semibold mb-8 text-gray-800">Education</h2>
      <div class="space-y-8">
        ${educationData
          .map(
            (edu) => `
              <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 class="text-xl font-bold text-blue-600">${
                  edu.university
                }</h3>
                <p class="text-lg text-gray-700">${edu.degree}</p>
                <p class="text-sm text-gray-500 mb-4">${edu.duration}</p>
                ${
                  edu.gpa
                    ? `<p class="text-sm text-gray-500 mb-4"><strong>GPA:</strong> ${edu.gpa}</p>`
                    : ""
                }
                ${
                  edu.specialisation
                    ? `<p class="text-gray-700"><strong>Specialisation:</strong> ${edu.specialisation}</p>`
                    : ""
                }
                ${
                  edu.minor
                    ? `<p class="text-gray-700"><strong>Minor:</strong> ${edu.minor}</p>`
                    : ""
                }
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
};
