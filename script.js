const aboutTab = document.getElementById("about-tab");
const skillTab = document.getElementById("skill-tab");
const projectTab = document.getElementById("project-tab");

const content = document.getElementById("content");

function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      content.innerHTML = data;
    })
    .catch((error) => console.error("Error loading content:", error));
}

aboutTab.addEventListener("click", (event) => {
  event.preventDefault();
  loadContent("content/about.html");
});

skillTab.addEventListener("click", (event) => {
  event.preventDefault();
  loadContent("content/skill.html");
});

projectTab.addEventListener("click", (event) => {
  event.preventDefault();
  loadContent("content/project.html");
});
