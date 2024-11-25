export const renderAbout = (): string => `
<section id="about" class="max-w-7xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mb-12">
  <h2 class="text-3xl font-semibold mb-4 text-gray-800">About Me</h2>
  
  <!-- About Image Section -->
  <div class="flex flex-col md:flex-row items-center mb-8">
    <img src="/photo.jpeg" alt="Ng Tze Kean" class="w-60 h-60 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8" />
    <div>
      <p class="text-xl text-gray-800 font-semibold">Hi! I'm Ng Tze Kean, a passionate Computer Science student specializing in AI and Business.</p>
      <p class="text-lg text-gray-700 mt-4">I'm from Singapore, and I'm deeply passionate about technology, artificial intelligence, and business innovation. Currently, I am pursuing my undergraduate studies at Nanyang Technological University (NTU), where I specialize in AI with a minor in Business. I am excited about leveraging technology to solve real-world problems and make a positive impact on society.</p>
    </div>
  </div>

  <!-- Personal Interests Section -->
  <div class="mt-8">
    <h3 class="text-2xl font-semibold text-gray-800">Fun Facts & Interests</h3>
    <ul class="list-disc pl-5 mt-4">
      <li>Staying active outdoors through sports like swim, cycle, run.</li>
      <li>Avid reader, particularly in the fields of technology, business, and philosophy.</li>
      <li>Involved in volunteer work, including contributing to various charitable causes.</li>
      <li>Always exploring new ways to improve my coding skills and contribute to open-source projects.</li>
    </ul>
  </div>
</section>
`;
