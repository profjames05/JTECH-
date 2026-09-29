# JTech Solutions Website

A modern corporate website for JTech Solutions, built with HTML, CSS, and vanilla JavaScript. The site includes multiple pages, responsive navigation, theme switching, service and project sections, contact form validation, and a project modal.

## Project Overview

JTech Solutions is a technology company based in Ghana, focused on delivering digital solutions for individuals, businesses, educational institutions, and organizations. The project is designed to be easy to customize and ready for local development or GitHub Pages deployment.

## Features

- Responsive multi-page corporate website
- Sticky navigation with mobile menu
- Dark and light mode toggle with localStorage persistence
- Service cards with service detail modals
- Six locally illustrated JTech concept and demo projects with responsive filtering and project details
- Original local SVG artwork for the JTech brand, hero, technology, contact, and project interfaces
- Contact form with client-side validation and configurable submission behavior
- Scroll-triggered animations and reduced motion support
- SEO-friendly metadata and accessible structure
- GitHub Pages compatible static site

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- SVG logo and illustrations
- Google Fonts
- Font Awesome or icon-based SVG usage (kept lightweight)

## Folder Structure

```text
jtech-solutions/
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── privacy.html
├── terms.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── animations.js
│   ├── contact.js
│   └── projects.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
├── README.md
└── .gitignore
```

## Local Setup

1. Open the project folder in VS Code.
2. Start a local static server using Live Server or any simple server.
3. Open the homepage in your browser.

Example using Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

You can also preview the site with the VS Code Live Server extension. No build step or package installation is required.

## How to Customize Company Information

Edit the configuration inside `js/main.js`:

```js
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
    whatsapp: ''
  }
};
```

Update the values to match the real company contact details and social media links before deployment. The static contact form opens a pre-filled email draft addressed to `info@jtechsolutions.com`; change that address in `js/contact.js` if needed.

## How to Add Projects

Projects are defined in `js/main.js` in the `projectData` array. Current cards are explicitly labeled concepts or JTech demo projects and use sample data where applicable. Each item includes:

- title
- description
- technologies
- category and filters
- project status
- image
- link
- features

Add or remove items as needed to expand the portfolio.

## How to Add Services

Services are defined in `js/main.js` in the `services` array. Update the content to reflect new offerings or change existing descriptions.

## GitHub Upload and Pages Deployment

This repository is a complete static site. It has no build step, server, database, API keys, or `node_modules` requirement, so it can be uploaded directly to GitHub.

1. Create a new GitHub repository. Use the repository name you want for the site URL.
2. Upload the contents of this folder, keeping the HTML files at the repository root.
3. Open the repository's **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the default branch and the `/ (root)` folder, then select **Save**.
6. Wait for GitHub to publish the site, then open the Pages URL shown in the same screen.

Use the repository root rather than a nested project folder. All page, stylesheet, script, image, and icon references use relative paths for GitHub Pages compatibility.

## Connecting a Backend Later

The contact form works on GitHub Pages by opening a pre-filled email draft. If you later connect a backend or form service, replace the `mailto:` flow in `js/contact.js` with an API request such as:

```js
fetch('https://your-api-endpoint.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

The project structure is already organized to support a future backend or database integration without major rewrites.

## Notes

- Do not expose private credentials or API keys in the front-end code.
- Keep content editable via configuration objects and arrays.
- Test layout and responsiveness across desktop and mobile sizes.
