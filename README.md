# Sentisum Dashboard

A unified insights dashboard built with Next.js, React, and Tailwind CSS.

## Features

- Metric cards for key KPIs
- Interactive charts and tables
- Responsive layout
- Dark mode support

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dalroy44/sentisum-dashboard.git
   cd sentisum-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/                # Next.js app directory
  components/         # Reusable UI components
  pages/              # (If used) Additional Next.js pages
  Utils/              # Utility functions and helpers
```

## Deployment

This project can be deployed to Vercel, Netlify, or GitHub Pages.  
For GitHub Pages, see the provided GitHub Actions workflow in `.github/workflows/`.

### Vercel Deployment

The project is currently deployed on [Vercel](https://sentisum-dashboard-five.vercel.app/).  
To deploy your own version:

1. Push your repository to GitHub.
2. Go to [https://vercel.com/import](https://vercel.com/import) and import your repository.
3. Follow the prompts to configure and deploy.

Vercel will automatically build and deploy your project on every push to the main branch.

## License

MIT
