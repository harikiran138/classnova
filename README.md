# ClassNova (React + Vite)

This repository is a React + TypeScript + Vite app with TailwindCSS and Radix UI.

What's added in this branch:

- Lenis smooth-scrolling integration (accessible, respects prefers-reduced-motion)
- Anchor link interception using Lenis (clicking navbar links uses smooth scroll)
- A small scroll animation demo using IntersectionObserver
- CI workflow to run build on push

Quick start

Install:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Notes

- The Lenis provider lives in `src/lib/lenis-provider.tsx` and exposes the Lenis instance via context.
- Reduced motion is detected with `src/lib/use-prefers-reduced-motion.ts` and disables Lenis when the user prefers reduced motion.
- For richer scroll-driven animations consider adding GSAP + ScrollTrigger and wiring it to Lenis.
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6fa34096-cc31-497f-887a-75be18870cd9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6fa34096-cc31-497f-887a-75be18870cd9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6fa34096-cc31-497f-887a-75be18870cd9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
