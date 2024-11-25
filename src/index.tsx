import "./style.css";
import { renderAbout } from "./components/about";
import { renderExperience } from "./components/experience";
import { renderProjects } from "./components/projects";
import { renderEducation } from "./components/education";
import { renderAchievements } from "./components/achievements";
import { renderResume } from "./components/resume";
import { renderBlogPosts } from "./components/blog"; // Import the blog component

const contentData = require("./data/content.json");

// Define routes for the different sections
const routes: Record<string, () => string | Promise<string>> = {
  about: () => renderAbout(contentData.contact),
  experience: () => renderExperience(contentData.experiences),
  projects: () => renderProjects(contentData.projects),
  education: () => renderEducation(contentData.education),
  achievements: () => renderAchievements(contentData.achievements),
  resume: () => renderResume(contentData.resume),
  blog: async () => await renderBlogPosts(),
};

// State to track the menu open/close state
let isMenuOpen = false;

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen;
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.style.display = isMenuOpen ? "block" : "none";
  }
};

// Event listener to handle content loading based on navigation clicks
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll("nav a");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // Add event listeners to each navigation link
  links.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const sectionId = (event.target as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1); // Get the ID of the clicked section

      if (content && sectionId && routes[sectionId]) {
        // Load the content of the clicked section
        const sectionContent = await routes[sectionId](); // Wait for async functions
        content.innerHTML = sectionContent; // Update the content section

        // Close the mobile menu after clicking a link
        if (isMenuOpen) {
          toggleMenu();
        }
      }
    });
  });

  // Toggle the mobile menu when the hamburger icon is clicked
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener("click", toggleMenu);
  }

  // Load default section (e.g., About) if not directly accessing a page
  if (content) {
    const aboutContent = routes["about"]();
    if (aboutContent instanceof Promise) {
      aboutContent.then(
        (contentHTML: string) => (content.innerHTML = contentHTML)
      );
    } else {
      content.innerHTML = aboutContent;
    }
  }
});
