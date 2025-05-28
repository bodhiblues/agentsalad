# AgentSalad Blog

A modern blog website built with SvelteKit and deployed on Netlify.

## Features

- 🚀 Built with SvelteKit and TypeScript
- 🎨 Modern, responsive design
- 📱 Mobile-friendly
- ⚡ Fast performance with static site generation
- 🔍 SEO optimized
- 📝 Blog post system with tags and metadata
- 🌐 Ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd agentsalad
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Development

### Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout
│   ├── +page.svelte             # Home page
│   ├── about/
│   │   └── +page.svelte         # About page
│   └── blog/
│       ├── +page.svelte         # Blog listing
│       └── [slug]/
│           └── +page.svelte     # Individual blog posts
├── lib/                         # Reusable components
└── app.html                     # HTML template
```

### Adding New Blog Posts

Currently, blog posts are stored as static data in the blog post component. To add a new post:

1. Add the post data to the `posts` object in `src/routes/blog/[slug]/+page.svelte`
2. Add the post preview to the blog listing in `src/routes/blog/+page.svelte`
3. Update the recent posts on the home page in `src/routes/+page.svelte`

For a production blog, consider integrating with a headless CMS like:
- Strapi
- Contentful
- Sanity
- Or use markdown files with a static site generator

## Deployment

### Deploy to Netlify

#### Option 1: Connect GitHub Repository

1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Netlify will automatically detect the build settings
6. Click "Deploy site"

#### Option 2: Manual Deploy

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify's deploy area

### Environment Variables

If you add any environment variables, make sure to set them in your Netlify dashboard under Site settings > Environment variables.

## Customization

### Styling

The blog uses custom CSS with modern features like CSS Grid and Flexbox. You can customize the design by modifying the styles in each component.

### Content

- Update the site name and branding in `src/routes/+layout.svelte`
- Modify the hero section in `src/routes/+page.svelte`
- Update the about page content in `src/routes/about/+page.svelte`
- Add your own blog posts following the existing structure

### SEO

Each page includes proper meta tags for SEO. Update the titles and descriptions in each component's `<svelte:head>` section.

## Technologies Used

- **SvelteKit** - Full-stack framework
- **TypeScript** - Type safety
- **CSS** - Modern styling with Grid and Flexbox
- **Netlify** - Hosting and deployment
- **Vite** - Build tool

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project as a starting point for your own blog!
