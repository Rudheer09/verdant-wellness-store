# Verdant — Wellness & Skincare Storefront

## Overview

Verdant is a modern, responsive e-commerce website concept focused on wellness and skincare products. It provides a clean and intuitive shopping experience, allowing users to explore products, discover items by category, view product details, and manage their shopping cart.

The website is built using React and Vite, with responsive styling for desktop and mobile devices.

## Features

- **Homepage:** Introduces the Verdant brand and highlights featured products.
- **Product Catalogue:** Displays available skincare and wellness products.
- **Category Filtering:** Allows users to browse products by category.
- **Search:** Helps users find products by name or relevant details.
- **Price Sorting:** Organizes products according to price.
- **Product Details:** Provides individual product information and imagery.
- **Shopping Cart:** Allows users to add products, adjust quantities, remove items, and view the subtotal.
- **Demo Checkout:** Provides a sample checkout experience.
- **About Section:** Introduces the brand and its concept.
- **Newsletter Interface:** Includes a user interface for newsletter subscriptions.
- **Responsive Design:** Adapts the layout to different screen sizes.

## Technologies Used

- **React** — Component-based user interface development.
- **Vite** — Development server and production build tooling.
- **JavaScript** — Application logic and user interactions.
- **HTML5** — Website structure.
- **CSS3** — Styling, layouts, and responsive design.
- **GitHub Actions** — Automated build and deployment workflow.
- **GitHub Pages** — Website hosting.

## User Experience

Verdant uses a clean visual design, organized product layouts, and straightforward navigation to make product discovery and cart management simple. Interactive elements provide a foundation for an e-commerce shopping experience across desktop and mobile devices.

## Project Structure

```text
verdant-wellness-store/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The `src/` directory contains the React application and its interface components. The configuration files define the development environment, build process, and GitHub Pages deployment workflow.

## Running Locally

Ensure Node.js and npm are installed.

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Deployment

The project includes a GitHub Actions workflow configured to build and deploy the website to GitHub Pages. Once the repository and Pages settings are configured, changes pushed to the configured branch can trigger an automated deployment.

## Limitations

This project is a front-end e-commerce concept. The checkout does not process real payments, and the newsletter interface is not connected to a subscription service. Product content and imagery are illustrative, with images loaded from Unsplash.

## Conclusion

Verdant demonstrates responsive web design, React component development, interactive product browsing, shopping cart functionality, and an automated deployment workflow. It serves as a foundation for a more complete wellness and skincare e-commerce platform.
