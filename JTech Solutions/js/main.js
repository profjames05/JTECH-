const siteConfig = {
  companyName: 'JTech Solutions',
  slogan: 'Technology. Innovation. Solutions.',
  location: 'Kumasi, Ghana',
  email: 'info@jtechsolutions.com',
  phone: '+233598815100',
  whatsapp: '+233598385533',
  website: '',
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    linkedin: '',
    github: '',
    whatsapp: 'https://wa.me/233598385533'
  }
};

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'code',
    description: 'Create modern, responsive and high-performance websites for businesses, organizations and individuals.',
    features: ['Responsive design', 'Modern user interfaces', 'SEO-ready structure', 'Performance optimization', 'Website maintenance'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
    benefit: 'A fast, accessible digital presence that makes it easier for customers to understand and reach your business.'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: 'layers',
    description: 'Build custom software systems designed around specific business requirements.',
    features: ['Management systems', 'Attendance systems', 'Inventory systems', 'Booking systems', 'Business applications'],
    technologies: ['JavaScript', 'APIs', 'Databases', 'Cloud services'],
    benefit: 'Reduce repetitive work and make everyday operations clearer with software shaped around your workflow.'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'mobile',
    description: 'Develop modern mobile applications for real-world problems.',
    features: ['Android applications', 'Cross-platform applications', 'Business applications', 'Educational applications', 'Custom mobile solutions'],
    technologies: ['Flutter', 'Mobile UI', 'APIs', 'Offline-ready data'],
    benefit: 'Bring useful services closer to customers and staff with intuitive mobile experiences.'
  },
  {
    id: 'database-data-solutions',
    title: 'Database & Data Solutions',
    icon: 'database',
    description: 'Create reliable systems for storing, managing and analyzing information.',
    features: ['Database design', 'Database management', 'Data analysis', 'Reporting', 'Data-driven applications', 'Query optimization'],
    technologies: ['SQL', 'Data modeling', 'Dashboards', 'Reporting'],
    benefit: 'Turn scattered records into dependable information that supports better decisions.'
  },
  {
    id: 'it-support-networking',
    title: 'IT Support & Networking',
    icon: 'network',
    description: 'Provide technology support and networking solutions.',
    features: ['Computer setup', 'Troubleshooting', 'Network installation', 'System configuration', 'IT consultation', 'Technical support'],
    technologies: ['Networks', 'Workstations', 'Cloud tools', 'System monitoring'],
    benefit: 'Keep essential technology connected, reliable, and ready for the people who depend on it.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'shield',
    description: 'Help organizations improve their digital security.',
    features: ['Security awareness', 'Basic security assessment', 'Account protection', 'Data protection', 'Security best practices'],
    technologies: ['Access controls', 'Security reviews', 'Backups', 'Monitoring'],
    benefit: 'Build safer digital habits and reduce avoidable risk to accounts, devices, and business information.'
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    icon: 'spark',
    description: 'Use modern technologies to improve business processes.',
    features: ['AI-assisted applications', 'Workflow automation', 'Digital forms', 'Smart systems', 'Business process automation'],
    technologies: ['AI services', 'APIs', 'Workflow tools', 'Data systems'],
    benefit: 'Give teams time back by automating repetitive steps and connecting the tools they already use.'
  }
];

const projectData = [
  {
    id: 1,
    title: 'Smart Location-Based Attendance System',
    description: 'A location-aware attendance platform concept for managing class records with geolocation verification.',
    problem: 'Manual attendance is slow to reconcile and difficult to verify across multiple classes.',
    solution: 'A student and lecturer workflow pairs attendance records with location checks and clear history.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Geolocation API', 'Database'],
    category: 'Education / Web Application',
    filters: ['education', 'web'],
    status: 'Featured concept',
    image: 'assets/images/projects/attendance-dashboard.svg',
    link: '',
    features: ['Location verification', 'Student attendance history', 'Course information', 'Lecturer reporting']
  },
  {
    id: 2,
    title: 'Business Management System',
    description: 'A demonstration operations dashboard for reviewing sample sales, customer activity, inventory, and reports.',
    problem: 'Business information spread across separate tools makes routine decisions harder to track.',
    solution: 'A unified dashboard concept brings sample operational indicators and recent activity into one view.',
    technologies: ['Web Application', 'Database', 'Dashboard Analytics'],
    category: 'Business / Software',
    filters: ['business', 'software'],
    status: 'JTech demo project',
    image: 'assets/images/projects/business-management.svg',
    link: '',
    features: ['Sample sales and revenue', 'Customer records', 'Inventory overview', 'Reports and activity']
  },
  {
    id: 3,
    title: 'Business Mobile App',
    description: 'A mobile application concept for staff to check business activity, customer updates, and reports while away from the desk.',
    problem: 'Teams need timely access to customer and business updates while working on the move.',
    solution: 'A mobile-first dashboard concept surfaces key information, notifications, and customer activity.',
    technologies: ['Flutter', 'Mobile UI', 'API Integration'],
    category: 'Mobile Application',
    filters: ['mobile', 'business'],
    status: 'JTech demo project',
    image: 'assets/images/projects/mobile-business-app.svg',
    link: '',
    features: ['Mobile dashboard', 'Notifications', 'Customer information', 'Sample reports']
  },
  {
    id: 4,
    title: 'Smart School Management System',
    description: 'A school administration portal concept for organizing student, teacher, course, attendance, results, and fee records.',
    problem: 'School teams need a consistent way to access academic and administrative information.',
    solution: 'A role-oriented school dashboard groups core records, term indicators, and upcoming activities.',
    technologies: ['Web Application', 'Database', 'Responsive UI'],
    category: 'Education / Software',
    filters: ['education', 'software'],
    status: 'JTech demo project',
    image: 'assets/images/projects/school-management.svg',
    link: '',
    features: ['Students and teachers', 'Courses and attendance', 'Results and fees', 'Reports and schedules']
  },
  {
    id: 5,
    title: 'Business Data Analytics Dashboard',
    description: 'A sample-data dashboard concept with revenue trends, customer statistics, performance indicators, and monthly analysis.',
    problem: 'Raw business records can be difficult to compare and turn into useful decisions.',
    solution: 'A visual reporting workspace summarizes illustrative KPIs and trends in a scannable format.',
    technologies: ['Data Visualization', 'Dashboard UI', 'Sample Data'],
    category: 'Data / Analytics',
    filters: ['data', 'business'],
    status: 'JTech demo project · sample data',
    image: 'assets/images/projects/data-analytics-dashboard.svg',
    link: '',
    features: ['Revenue trend chart', 'Customer statistics', 'Monthly performance', 'Illustrative KPI cards']
  },
  {
    id: 6,
    title: 'Smart Campus Guide',
    description: 'A campus navigation app concept with building search, GPS location, route guidance, saved places, and offline map data.',
    problem: 'New students and visitors may struggle to find buildings and services on a large campus.',
    solution: 'A mobile guide combines a searchable map with location-aware routes and saved destinations.',
    technologies: ['Flutter', 'GPS', 'Offline Data', 'Mobile UI'],
    category: 'Mobile / Education',
    filters: ['mobile', 'education'],
    status: 'JTech demo project',
    image: 'assets/images/projects/smart-campus-guide.svg',
    link: '',
    features: ['Campus map', 'Building search', 'GPS navigation', 'Favorites and recent searches']
  }
];

function renderServices() {
  const container = document.getElementById('services-grid');
  const homeContainer = document.getElementById('home-services-grid');
  const icons = {
    code: '<path d="m10 8-5 4 5 4M14 8l5 4-5 4M13 5l-2 14"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/>',
    mobile: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 6h4M11 18h2"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    network: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="m7 7 3 3m7-3-3 3m-7 7 3-3m7 3-3-3"/>',
    shield: '<path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
    spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 15l1 2.5 2.5 1-2.5 1L19 22l-1-2.5-2.5-1 2.5-1L19 15Z"/>'
  };

  const renderCard = (service) => {
    const action = document.body.dataset.page === 'services'
      ? `<button class="btn btn-secondary" type="button" data-service-id="${service.id}">Learn More</button>`
      : `<a class="btn btn-secondary" href="services.html?service=${service.id}">Learn More</a>`;

    return `
    <article class="service-card reveal fade-up" id="${service.id}">
      <div class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[service.icon]}</svg></div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <ul>
        ${service.features.slice(0, 4).map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
      ${action}
    </article>
  `;
  };

  if (container) {
    container.innerHTML = services.map(renderCard).join('');
  }

  if (homeContainer) {
    homeContainer.innerHTML = services.slice(0, 3).map(renderCard).join('');
  }

  initServiceDetails();
}

function updateCurrentYear() {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
}

function renderSocialLinks() {
  const groups = document.querySelectorAll('[data-social-links]');
  const icons = [
    { key: 'facebook', label: 'Facebook', icon: 'f' },
    { key: 'instagram', label: 'Instagram', icon: '◎' },
    { key: 'tiktok', label: 'TikTok', icon: '♪' },
    { key: 'linkedin', label: 'LinkedIn', icon: 'in' },
    { key: 'github', label: 'GitHub', icon: 'G' },
    { key: 'whatsapp', label: 'WhatsApp', icon: 'W' }
  ];

  groups.forEach((group) => {
    const links = icons
      .map(({ key, label, icon }) => {
        const value = siteConfig.social[key];
        if (!value) return '';
        return `<a href="${value}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${icon}</a>`;
      })
      .join('');

    group.innerHTML = links || '<span class="muted-link">Social links will be configured later.</span>';
  });
}

function setContactDetails() {
  document.querySelectorAll('[data-location]').forEach((node) => {
    node.textContent = siteConfig.location;
  });

  const mailLinks = document.querySelectorAll('a[href^="mailto:"]');
  mailLinks.forEach((link) => {
    if (siteConfig.email) {
      link.href = `mailto:${siteConfig.email}`;
      link.textContent = siteConfig.email;
    }
  });

  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach((link) => {
    if (siteConfig.phone) {
      link.href = `tel:${siteConfig.phone}`;
    }
  });

  const whatsAppLinks = document.querySelectorAll('a[href*="wa.me"]');
  whatsAppLinks.forEach((link) => {
    if (siteConfig.whatsapp) {
      const digits = siteConfig.whatsapp.replace(/\D/g, '');
      link.href = `https://wa.me/${digits}`;
    }
  });
}

function initServiceDetails() {
  const modal = document.getElementById('service-modal');
  if (!modal) return;
  let activeTrigger = null;

  const closeModal = () => {
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeTrigger?.focus();
  };

  const openModal = (service) => {
    modal.querySelector('#service-modal-title').textContent = service.title;
    modal.querySelector('#service-modal-description').textContent = service.description;
    modal.querySelector('#service-modal-benefit').textContent = service.benefit;
    modal.querySelector('#service-modal-features').innerHTML = service.features.map((feature) => `<li>${feature}</li>`).join('');
    modal.querySelector('#service-modal-tech').innerHTML = service.technologies.map((technology) => `<span>${technology}</span>`).join('');
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  };

  document.querySelectorAll('[data-service-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const service = services.find((item) => item.id === button.dataset.serviceId);
      if (service) {
        activeTrigger = button;
        openModal(service);
      }
    });
  });

  modal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeService === 'true') closeModal();
  });
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-visible')) closeModal();
  });

  const requestedService = new URLSearchParams(window.location.search).get('service');
  const initialService = services.find((item) => item.id === requestedService);
  if (initialService) openModal(initialService);
}

function initReadingTools() {
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', 'Page scroll progress');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', '100');
  progress.setAttribute('aria-valuenow', '0');

  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.type = 'button';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.title = 'Back to top';
  backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.append(progress, backToTop);

  let frameRequested = false;
  const updateProgress = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(() => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = scrollableHeight > 0 ? Math.round((window.scrollY / scrollableHeight) * 100) : 0;
      progress.style.setProperty('--scroll-progress', `${value}%`);
      progress.setAttribute('aria-valuenow', String(value));
      backToTop.classList.toggle('is-visible', window.scrollY > 420);
      frameRequested = false;
    });
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

function initTheme() {
  const savedTheme = localStorage.getItem('jtech-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const label = toggle.querySelector('.theme-label');
  const icon = toggle.querySelector('.theme-icon');

  const applyLabel = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    label.textContent = isDark ? 'Light' : 'Dark';
    icon.textContent = isDark ? '☀️' : '🌙';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  };

  applyLabel();

  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('jtech-theme', nextTheme);
    applyLabel();
  });
}

function animateCounter() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = current + (target === 100 ? '%' : (current < target ? '' : ''));
      if (target === 24) {
        counter.textContent = '24/7';
      }
    }, 40);
  });
}

function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader);
}

function initImageFallbacks() {
  document.addEventListener('error', (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.dataset.fallback) return;
    const fallbackUrl = new URL(image.dataset.fallback, window.location.href).href;
    if (image.src !== fallbackUrl) image.src = fallbackUrl;
    else image.removeAttribute('data-fallback');
  }, true);
}

function initPage() {
  renderServices();
  renderSocialLinks();
  setContactDetails();
  initImageFallbacks();
  initTheme();
  updateCurrentYear();
  initRevealAnimations();
  initNavbarScroll();
  animateCounter();
  initReadingTools();
}

document.addEventListener('DOMContentLoaded', initPage);
