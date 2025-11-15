# RuB Core Airsoft Website

This is the official website for the RuB Core Airsoft club, a premier airsoft community based in Wellington. The website is designed to attract new members, provide information about the club, and showcase past and upcoming events.

## Features

*   **Homepage:** A comprehensive overview of the club with a hero banner, about us section, how we play, recent events, a gallery, and a contact/FAQ section.
*   **Event Detail Pages:** Detailed information about each event, including a description, gallery, game modes, rules, and required gear.
*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **SEO Optimized:** The website is optimized for search engines with proper meta tags and schema markup.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web projects.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **React Router:** A routing library for React applications.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/rub-core-gemini.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Serves the production build locally.

## Project Structure

```
.
├── .gitignore
├── App.tsx
├── components
│   ├── EventCard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── icons.tsx
│   └── Seo.tsx
├── constants.ts
├── index.html
├── index.tsx
├── package.json
├── pages
│   ├── EventDetailPage.tsx
│   └── HomePage.tsx
├── README.md
├── tsconfig.json
├── types.ts
└── vite.config.ts
```