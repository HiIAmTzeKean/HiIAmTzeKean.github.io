export interface Transcript {
  name: string;
  link: string;
}

export const renderResume = (
  resumeLink: string,
  transcripts: Transcript[]
): string => {
  // Set a fixed height for the flex container, let children fill it
  const flexContainerHeight = 1000;
  return `
    <section id="resume" class="bg-white p-6 rounded-lg shadow-lg mt-12">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6">Resume & Transcripts</h2>
      <div class="flex flex-col md:flex-row gap-6" style="height: ${flexContainerHeight}px;">
        <div class="flex-1 flex flex-col">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Resume</h3>
          <p>
            <a href="${resumeLink}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
              Download My Resume
            </a>
          </p>
          <iframe
            src="${resumeLink}"
            width="100%"
            height="100%"
            class="border border-gray-300 rounded-lg flex-1"
            style="flex: 1 1 0; min-height: 0;"
            title="Resume"
          ></iframe>
        </div>
        <div class="flex-1 flex flex-col">
          <h3 class="text-2xl font-semibold text-gray-700 mb-4">Transcripts</h3>
          <nav class="flex border-b border-gray-300 mb-4">
            ${transcripts
              .map(
                (t, idx) => `
                  <button
                    class="px-4 py-2 -mb-px border-b-2 font-medium transcript-tab ${
                      idx === 0
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-600 hover:text-blue-600"
                    }"
                    onclick="document.querySelectorAll('.transcript-panel').forEach((el, i) => el.classList.toggle('hidden', i !== ${idx})); document.querySelectorAll('.transcript-tab').forEach((el, i) => el.className = 'px-4 py-2 -mb-px border-b-2 font-medium transcript-tab ' + (i === ${idx} ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'));"
                    aria-selected="${idx === 0}"
                    aria-controls="transcript-panel-${idx}"
                    role="tab"
                    type="button"
                  >
                    ${t.name}
                  </button>
                `
              )
              .join("")}
          </nav>
          ${transcripts
            .map(
              (t, idx) => `
                <div id="transcript-panel-${idx}" class="transcript-panel flex-1${idx === 0 ? '' : ' hidden'}" role="tabpanel" style="min-height: 0; height:1000px;">
                  <p>
                    <a
                      href="${t.link}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-600 hover:underline"
                    >
                      Download ${t.name}
                    </a>
                  </p>
                  <iframe
                    src="${t.link}"
                    width="100%"
                    height="95%"
                    class="border border-gray-300 rounded-lg"
                    title="${t.name}"
                  ></iframe>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
};