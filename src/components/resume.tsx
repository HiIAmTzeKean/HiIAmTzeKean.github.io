export const renderResume = (resumeLink: string): string => `
<section id="resume" class="bg-white p-6 rounded-lg shadow-lg mt-12">
  <h2 class="text-3xl font-semibold text-gray-800 mb-6">Resume</h2>
  <p><a href="${resumeLink}" target="_blank" class="text-blue-600 hover:underline">Download My Resume</a></p>
  <div class="mb-6">
    <!-- Embedding the PDF -->
    <iframe 
      src="${resumeLink}"
      width="100%" 
      height="600" 
      class="border border-gray-300 rounded-lg"
      title="Resume">
    </iframe>
  </div>
</section>`;
