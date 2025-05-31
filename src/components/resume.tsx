export interface Transcript {
  name: string;
  link: string;
}

export const renderResume = (
  resumeLink: string,
  transcripts: Transcript[]
): string => {
  const resumeHeight = 1500;
  const transcriptCount = transcripts.length || 1; // avoid division by zero
  const transcriptHeight = Math.floor((resumeHeight - transcriptCount * 35) / transcriptCount);
  return   `
<section id="resume" class="bg-white p-6 rounded-lg shadow-lg mt-12">
  <h2 class="text-3xl font-semibold text-gray-800 mb-6">Resume & Transcripts</h2>
  <div class="flex flex-col md:flex-row gap-6">
    <!-- Resume Section -->
    <div class="flex-1">
      <h3 class="text-2xl font-semibold text-gray-700 mb-4">Resume</h3>
      <p><a href="${resumeLink}" target="_blank" class="text-blue-600 hover:underline">Download My Resume</a></p>
      <iframe 
        src="${resumeLink}"
        width="100%" 
        height="${resumeHeight}" 
        class="border border-gray-300 rounded-lg"
        title="Resume">
      </iframe>
    </div>
    <!-- Transcripts Section -->
    <div class="flex-1">
      <h3 class="text-2xl font-semibold text-gray-700 mb-4">Transcripts</h3>
      ${transcripts
        .map(
          (t) => `
      <div class="mb-6">
        <p><a href="${t.link}" target="_blank" class="text-blue-600 hover:underline">Download ${t.name}</a></p>
        <iframe 
          src="${t.link}"
          width="100%" 
          height="${transcriptHeight}"
          class="border border-gray-300 rounded-lg"
          title="${t.name}">
        </iframe>
      </div>
      `
        )
        .join("")}
    </div>
  </div>
</section>`;
};