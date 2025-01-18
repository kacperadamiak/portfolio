let projectsData = [];

fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    projectsData = projects;
    displayProjects(projectsData);
    document.getElementById("all-button").classList.add("active");
  })
  .catch((error) => console.error("Błąd wczytywania projektów:", error));

function displayProjects(projects) {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectCard = document.createElement("a"); // Zmieniamy div na a, aby cały blok był klikalny
    projectCard.classList.add("project-card");
    projectCard.href = project.link; // Dodajemy link do projektu
    projectCard.target = "_blank"; // Otwieranie linku w nowej karcie

    // Generowanie HTML dla każdego projektu
    projectCard.innerHTML = `
                <div class="image-container">  
                    <img src="${project.image}" alt="${
      project.title
    }" class="project-image">
                </div>
                <div class="keywords">
                    ${project.keywords
                      .map(
                        (keyword) => `<span class="keyword">${keyword}</span>`
                      )
                      .join(" ")}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;

    projectsContainer.appendChild(projectCard);
  });
}

function changeStyle(button) {
  const buttons = document.querySelectorAll(".filter-button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function filterProjects(category, button) {
  changeStyle(button);
  if (category === "All") {
    displayProjects(projectsData);
  } else {
    const filteredProjects = projectsData.filter(
      (project) => project.category === category
    );
    displayProjects(filteredProjects);
  }
}
