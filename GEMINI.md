# Project Overview

This is the official website for the RuB Core Airsoft club, a premier airsoft community based in Wellington. The website is designed to attract new members, provide information about the club, and showcase past and upcoming events.

The project is a single-page application (SPA) built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). It uses [TypeScript](https://www.typescriptlang.org/) for static typing and [Tailwind CSS](https://tailwindcss.com/) for styling. Routing is handled by [React Router](https://reactrouter.com/).

The website has two main pages:

*   **Homepage:** A comprehensive overview of the club with a hero banner, about us section, how we play, recent events, a gallery, and a contact/FAQ section.
*   **Event Detail Pages:** Detailed information about each event, including a description, gallery, game modes, rules, and required gear.

The project is well-structured, with a clear separation of concerns between components, pages, and constants. It also includes SEO optimization through a dedicated `Seo` component.

# Building and Running

To get a local copy up and running, follow these simple steps.

## Prerequisites

*   Node.js (v18 or higher)
*   npm

## Installation

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

# Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are used directly in the JSX.
*   **Components:** Components are written as functional components using React Hooks.
*   **Typing:** TypeScript is used for static typing. All components and functions should have explicit types.
*   **Data:** Static data, such as event details and gallery images, is stored in the `constants.ts` file.
*   **Routing:** Routing is handled by React Router. New pages should be added to the `Routes` component in `App.tsx`.
*   **SEO:** The `Seo` component should be used to set the title, description, and other meta tags for each page.
