export const renderEducation = (
  educationData: {
    university: string;
    duration: string;
    gpa?: string;
    degree: string;
    specialisation?: string;
    minor?: string;
    description?: string | string[]; // Description can be a string or a list of strings
  }[]
): string => {
  return `
    <section id="education" class="max-w-7xl mx-auto px-6 py-12 bg-white">
      <h2 class="text-3xl font-semibold mb-8 text-gray-800">Education</h2>
      <div class="space-y-8">
        <!-- First education item spans full width -->
        ${
          educationData.length > 0
            ? `
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-xl font-bold text-blue-600">${educationData[0].university}</h3>
            <p class="text-lg text-gray-700">${educationData[0].degree}</p>
            <p class="text-sm text-gray-500 mb-4">${educationData[0].duration}</p>
            ${
              educationData[0].gpa
                ? `<p class="text-sm text-gray-500 mb-4"><strong>GPA:</strong> ${educationData[0].gpa}</p>`
                : ""
            }
            ${
              educationData[0].specialisation
                ? `<p class="text-gray-700"><strong>Specialisation:</strong> ${educationData[0].specialisation}</p>`
                : ""
            }
            ${
              educationData[0].minor
                ? `<p class="text-gray-700"><strong>Minor:</strong> ${educationData[0].minor}</p>`
                : ""
            }
            ${
              Array.isArray(educationData[0].description)
                ? `<ul class="list-disc pl-5 mt-4 text-gray-700">
                    ${educationData[0].description
                      .map((item) => `<li>${item}</li>`)
                      .join("")}
                  </ul>`
                : educationData[0].description
                ? `<p class="text-gray-700 mt-4">${educationData[0].description}</p>`
                : ""
            }
          </div>
        `
            : ""
        }
        <!-- Remaining education items in a 2-column layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${educationData
            .slice(1)
            .map(
              (edu) => `
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-bold text-blue-600">${edu.university}</h3>
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
              ${
                Array.isArray(edu.description)
                  ? `<ul class="list-disc pl-5 mt-4 text-gray-700">
                      ${edu.description
                        .map((item) => `<li>${item}</li>`)
                        .join("")}
                    </ul>`
                  : edu.description
                  ? `<p class="text-gray-700 mt-4">${edu.description}</p>`
                  : ""
              }
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};