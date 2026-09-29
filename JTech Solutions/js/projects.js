document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projects-grid');
  const modal = document.getElementById('project-modal');
  let lastProjectTrigger = null;

  if (!grid) return;

  function renderProjects(filter = 'all') {
    const items = projectData.filter((project) => filter === 'all' || project.filters.includes(filter));

    if (!items.length) {
      grid.innerHTML = '<div class="project-empty"><strong>No matching concepts yet.</strong><p>Choose another category to explore JTech demo interfaces.</p></div>';
      return;
    }

    grid.innerHTML = items
      .map(
        (project) => `
          <article class="project-card reveal fade-up" data-category="${project.filters.join(' ')}">
            <div class="project-media">
              <img src="${project.image}" alt="${project.title} demonstration interface" loading="lazy" data-fallback="assets/images/services/fallback.svg" />
              <span class="project-status">${project.status}</span>
            </div>
            <div class="project-body">
              <div class="project-meta">
                <span>${project.category}</span>
                <span class="pill">Concept</span>
              </div>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="project-tech">
                ${project.technologies.slice(0, 3).map((tech) => `<span>${tech}</span>`).join('')}
              </div>
              <div class="project-actions">
                <button class="btn btn-secondary" type="button" data-project-id="${project.id}">View Project</button>
              </div>
            </div>
          </article>
        `
      )
      .join('');

    attachProjectButtons();
  }

  function attachProjectButtons() {
    const buttons = grid.querySelectorAll('[data-project-id]');
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const project = projectData.find((item) => item.id === Number(button.dataset.projectId));
        if (!project) return;
        lastProjectTrigger = button;
        openProjectModal(project);
      });
    });
  }

  function openProjectModal(project) {
    if (!modal) return;
    const image = modal.querySelector('#modal-image');
    const title = modal.querySelector('#modal-title');
    const description = modal.querySelector('#modal-description');
    const category = modal.querySelector('#modal-category');
    const status = modal.querySelector('#modal-status');
    const problem = modal.querySelector('#modal-problem');
    const solution = modal.querySelector('#modal-solution');
    const tech = modal.querySelector('#modal-tech');
    const features = modal.querySelector('#modal-features');
    const link = modal.querySelector('#modal-link');

    if (image) {
      image.src = project.image;
      image.dataset.fallback = 'assets/images/services/fallback.svg';
    }
    if (image) image.alt = `${project.title} preview`;
    if (title) title.textContent = project.title;
    if (description) description.textContent = project.description;
    if (category) category.textContent = project.category;
    if (status) status.textContent = project.status;
    if (problem) problem.textContent = project.problem;
    if (solution) solution.textContent = project.solution;
    if (tech) tech.innerHTML = project.technologies.map((item) => `<span>${item}</span>`).join('');
    if (features) features.innerHTML = project.features.map((item) => `<li>${item}</li>`).join('');
    if (link) {
      link.href = project.link || 'contact.html';
      link.textContent = project.link ? 'View Live Demo' : 'Discuss a Similar Project';
      link.classList.remove('is-disabled');
    }

    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close')?.focus();
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastProjectTrigger?.focus();
  }

  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => {
        const isActive = btn === button;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });
      renderProjects(button.dataset.filter);
    });
  });

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && (event.target.dataset.closeModal === 'true' || event.target.classList.contains('modal-backdrop'))) {
        closeProjectModal();
      }
    });

    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) closeButton.addEventListener('click', closeProjectModal);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
        closeProjectModal();
      }
    });
  }

  renderProjects();
});
