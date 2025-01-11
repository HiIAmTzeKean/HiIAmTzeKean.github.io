export const renderAbout = (contentData: any): string => `
<section id="about" class="max-w-7xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mb-12">
  <h2 class="text-3xl font-semibold mb-4 text-gray-800">About Me</h2>
  
  <!-- About Image Section -->
  <div class="flex flex-col md:flex-row items-center mb-8">
    <img 
      src="public/photo.jpeg" 
      alt="Ng Tze Kean" 
      class="w-60 h-60 shadow-lg mb-6 md:mb-0 md:mr-8 object-cover object-center" 
    />
    <div>
      <p class="text-xl text-gray-800 font-semibold">Hi! I'm Ng Tze Kean, a passionate Computer Science student specializing in AI and Business.</p>
      <p class="text-lg text-gray-700 mt-4">I'm from Singapore, and I'm deeply passionate about technology, artificial intelligence, and business innovation. Currently, I am pursuing my undergraduate studies at Nanyang Technological University (NTU), where I specialize in AI with a minor in Business. I am excited about leveraging technology to solve real-world problems and making a positive impact on society.</p>
    </div>
  </div>

  <!-- Personal Interests Section -->
  <div class="mt-8">
    <h3 class="text-2xl font-semibold text-gray-800">Interests</h3>
    <ul class="list-disc pl-5 mt-4">
      <li>Staying active outdoors through sports like swim, cycle, run.</li>
      <li>Active in promoting a good cause such as education.</li>
      <li>Involved in volunteer work, including contributing to various charitable causes.</li>
      <li>Always exploring new ways to improve my technical skills through team projects.</li>
    </ul>
  </div>

  <!-- Contact Section -->
  <div class="mt-8">
    <h3 class="text-2xl font-semibold text-gray-800">How to Contact Me</h3>
    <p class="text-lg text-gray-700 mt-4">You can reach out to me via the following methods:</p>

    <!-- Email and Phone Above Icons -->
    <div class="mt-4 mb-8">
      <p class="text-lg text-gray-700"><strong>Email:</strong> <a href="mailto:${contentData.email}" class="text-blue-600 hover:text-blue-800">${contentData.email}</a></p>
      <p class="text-lg text-gray-700"><strong>Phone:</strong> <a href="tel:${contentData.phone}" class="text-blue-600 hover:text-blue-800">${contentData.phone}</a></p>
    </div>

    <!-- Social Media Icons -->
    <div class="flex space-x-6">
      <a href="https://www.linkedin.com/in/${contentData.linkedin}" class="text-blue-600 hover:text-blue-800"><i class="fab fa-linkedin text-3xl"></i></a>
      <a href="https://github.com/${contentData.github}" class="text-gray-800 hover:text-black"><i class="fab fa-github text-3xl"></i></a>
      <a href="https://www.instagram.com/${contentData.instagram}" class="text-pink-600 hover:text-pink-800"><i class="fab fa-instagram text-3xl"></i></a>
      <a href="https://medium.com/@${contentData.medium}" class="text-gray-600 hover:text-gray-800"><i class="fab fa-medium text-3xl"></i></a>
      <a href="https://t.me/${contentData.telegram}" class="text-blue-500 hover:text-blue-700"><i class="fab fa-telegram-plane text-3xl"></i></a>
    </div>
  </div>
</section>
`;
