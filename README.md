# Autocomplete Search Bar

A React-based autocomplete search bar for recipes, featuring API integration, debounced search, and a modern UI using Tailwind CSS.

## Features

- Autocomplete search for recipes using [`RECIPE_API`](src/utils/constants.jsx)
- Debounced API requests for efficient searching ([`useAutoSearchAPI`](src/useAutoSearchAPI.jsx))
- Responsive and accessible UI ([`AutoSearch`](src/components/AutoSearch.jsx))
- Caching of previous search results
- Built with Vite, React, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Running Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

- [`src/components/AutoSearch.jsx`](src/components/AutoSearch.jsx): Main autocomplete component
- [`src/useAutoSearchAPI.jsx`](src/useAutoSearchAPI.jsx): Custom hook for API calls and caching
- [`src/utils/constants.jsx`](src/utils/constants.jsx): API endpoint constant
- [`src/App.jsx`](src/App.jsx): App entry point
- [`src/main.jsx`](src/main.jsx): React DOM rendering

## Customization

- Change the API endpoint in [`RECIPE_API`](src/utils/constants.jsx)
- Style with Tailwind CSS in [`src/index.css`](src/index.css) and [`src/App.css`](src/App.css)

## License

MIT
