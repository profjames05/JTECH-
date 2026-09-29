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
  website: 'https://example.com',
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

Update the values to match the real company contact details, social media links, and website URL before deployment.

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

## GitHub Pages Deployment

This site is static and compatible with GitHub Pages.

1. Push the project to a GitHub repository.
2. In GitHub, open the repository.
3. Go to Settings > Pages.
4. Set the source to the root branch or a docs folder if you choose that structure.
5. Publish the site.

Use relative paths and keep the HTML files at the root for proper static hosting.

## Connecting a Backend Later

The contact form is prepared for backend integration. In `js/contact.js`, locate the form submission logic and replace the placeholder success flow with an API request such as:

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
