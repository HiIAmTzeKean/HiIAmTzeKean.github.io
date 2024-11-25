import "./style.css";
import { renderAbout } from "./components/about";
import { renderExperience } from "./components/experience";
import { renderProjects } from "./components/projects";
import { renderEducation } from "./components/education";
import { renderResume } from "./components/resume";
import { renderBlogPosts } from "./components/blog"; // Import the blog component

const contentData = require("./data/content.json");

// Define routes for the different sections
const routes: Record<string, () => string | Promise<string>> = {
  about: () => renderAbout(contentData.contact),
  experience: () => renderExperience(contentData.experiences),
  projects: () => renderProjects(contentData.projects),
  education: () => renderEducation(contentData.education),
  resume: () => renderResume(contentData.resume),
  blog: async () => await renderBlogPosts(),
};

// Event listener to handle content loading based on navigation clicks
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll("nav a");

  // Add event listeners to each navigation link
  links.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const sectionId = (event.target as HTMLAnchorElement)
        .getAttribute("href")
        ?.substring(1); // Get the ID of the clicked section
      if (content && sectionId && routes[sectionId]) {
        const sectionContent = await routes[sectionId](); // Wait for async functions
        content.innerHTML = sectionContent; // Update the content section
      }
    });
  });

  // Load default section (e.g., About) if not directly accessing a page
  if (content) {
    const aboutContent = routes["about"]();
    if (aboutContent instanceof Promise) {
      aboutContent.then((contentHTML: string) => (content.innerHTML = contentHTML));
    } else {
      content.innerHTML = aboutContent;
    }
  }
});
