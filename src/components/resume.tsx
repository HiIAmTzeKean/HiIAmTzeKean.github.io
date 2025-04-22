export const renderResume = (resumeLink: string, transcriptLink: string): string => `
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
        height="600" 
        class="border border-gray-300 rounded-lg"
        title="Resume">
      </iframe>
    </div>
    <!-- Transcripts Section -->
    <div class="flex-1">
      <h3 class="text-2xl font-semibold text-gray-700 mb-4">Transcripts</h3>
      <p><a href="${transcriptLink}" target="_blank" class="text-blue-600 hover:underline">Download My Transcripts</a></p>
      <iframe 
        src="${transcriptLink}"
        width="100%" 
        height="600" 
        class="border border-gray-300 rounded-lg"
        title="Transcripts">
      </iframe>
    </div>
  </div>
</section>`;