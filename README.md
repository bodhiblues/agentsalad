# AgentSalad Blog

A modern blog website built with SvelteKit, featuring a markdown-based content management system and deployed on Netlify.

## Features

- 🚀 Built with SvelteKit and TypeScript
- 📝 Markdown-based blog posts with frontmatter
- 🎨 Modern, responsive design
- 📱 Mobile-friendly
- ⚡ Fast performance with static site generation
- 🔍 SEO optimized
- 📊 Blog post system with tags, metadata, and automatic sorting
- 🌐 Ready for Netlify deployment
- ✨ Syntax highlighting for code blocks
- 🛠️ Easy content management with markdown files

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

## Content Management

### Writing Blog Posts

This blog uses a markdown-based content system. Blog posts are stored as `.md` files in the `src/posts/` directory.

#### Creating a New Post

Use the built-in script to create a new post:

```bash
npm run new-post "Your Post Title"
```

This will create a new markdown file with the proper frontmatter template.

#### Manual Post Creation

Create a new `.md` file in `src/posts/` with the following frontmatter:

```markdown
---
title: 'Your Post Title'
date: '2024-01-20'
excerpt: 'A brief description of your post for previews and SEO'
tags: ['SvelteKit', 'Tutorial', 'Web Development']
readTime: '5 min read'
published: true
---

# Your Post Title

Write your content here using standard Markdown syntax.

## Subheading

You can use all standard Markdown features:

- Lists
- **Bold text**
- *Italic text*
- `inline code`
- [Links](https://example.com)

### Code Blocks

```javascript
function example() {
  console.log('Hello, world!');
}
```

### Blockquotes

> This is a blockquote for important notes.
```

#### Frontmatter Fields

- `title`: The post title (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `excerpt`: Brief description for previews and SEO (required)
- `tags`: Array of tags for categorization (required)
- `readTime`: Estimated reading time (required)
- `published`: Boolean to control visibility (required)
- `seo`: Enhanced SEO metadata (optional)
  - `title`: Custom SEO title (defaults to post title + site name)
  - `description`: Custom meta description (defaults to excerpt)
  - `ogImage`: Open Graph image URL for social sharing
  - `ogType`: Open Graph type (defaults to 'article')
  - `twitterCard`: Twitter card type (defaults to 'summary')
  - `canonical`: Canonical URL if different from current URL

#### Enhanced SEO Example

```yaml
---
title: 'Getting Started with SvelteKit'
date: '2024-01-15'
excerpt: 'Learn how to build modern web applications with SvelteKit...'
tags: ['SvelteKit', 'Tutorial']
readTime: '5 min read'
published: true
seo:
  title: 'Complete SvelteKit Tutorial: Build Modern Web Apps Fast'
  description: 'Master SvelteKit with this comprehensive tutorial. Learn file-based routing, SSR, SSG, and deployment.'
  ogImage: '/images/sveltekit-tutorial-og.jpg'
  ogType: 'article'
  twitterCard: 'summary_large_image'
---
```

#### Draft Posts

Set `published: false` in the frontmatter to create draft posts that won't appear in production.

### Markdown Features

The blog supports all standard Markdown features plus:

- **Syntax highlighting** for code blocks
- **Frontmatter** for metadata
- **Automatic slug generation** from filename
- **Responsive images** (when using proper markdown image syntax)
- **Typography optimization** with proper spacing and fonts

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
├── posts/                       # 📝 Markdown blog posts
│   ├── getting-started-with-sveltekit.md
│   ├── building-a-blog-with-sveltekit.md
│   └── ...
├── lib/
│   ├── components/
│   │   └── PostLayout.svelte    # Layout for blog posts
│   └── posts.ts                 # Post loading utilities
└── app.html                     # HTML template
```

### Adding New Features

The blog system is built with modularity in mind:

- **Post utilities** are in `src/lib/posts.ts`
- **Post layout** is in `src/lib/components/PostLayout.svelte`
- **Styling** is component-scoped with modern CSS

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run new-post "Title"` - Create a new blog post
- `npm run check` - Run TypeScript checks

## Deployment

### Deploy to Netlify

#### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Netlify will automatically detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

#### Option 2: Manual Deploy

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify's deploy area

### Custom Domain Setup

If you have a custom domain registered with Cloudflare:

1. In Netlify, go to Site settings → Domain management
2. Add your custom domain
3. In Cloudflare DNS settings, add:
   - Type: CNAME
   - Name: @ (or www)
   - Target: your-netlify-site.netlify.app
   - Proxy status: Proxied

### Environment Variables

If you add any environment variables, set them in your Netlify dashboard under Site settings → Environment variables.

## Customization

### Styling

The blog uses custom CSS with modern features like CSS Grid and Flexbox. You can customize the design by modifying the styles in each component.

### Content

- Update the site name and branding in `src/routes/+layout.svelte`
- Modify the hero section in `src/routes/+page.svelte`
- Update the about page content in `src/routes/about/+page.svelte`
- Add your own blog posts in `src/posts/`

### SEO

Each page includes comprehensive meta tags for optimal SEO and social sharing. The system automatically:

- **Page titles**: Uses custom SEO titles or falls back to post title + site name
- **Meta descriptions**: Uses custom SEO descriptions or post excerpts
- **Open Graph tags**: Complete Facebook/social media sharing optimization
- **Twitter Cards**: Optimized Twitter sharing with custom card types
- **Article metadata**: Structured data including publication dates and tags
- **Canonical URLs**: Support for custom canonical URLs when needed

#### SEO Features

- **Custom titles and descriptions** for each post
- **Open Graph images** for rich social media previews
- **Twitter Card optimization** with multiple card types
- **Article-specific metadata** (publication date, tags)
- **Canonical URL support** for SEO best practices
- **Automatic fallbacks** to ensure all posts have proper meta tags

## Technologies Used

- **SvelteKit** - Full-stack framework with file-based routing
- **TypeScript** - Type safety and better developer experience
- **mdsvex** - Markdown support with Svelte component integration
- **CSS** - Modern styling with Grid, Flexbox, and custom properties
- **Netlify** - Hosting and continuous deployment
- **Vite** - Fast build tool and development server

## Performance

The blog is optimized for performance:

- **Static site generation** for fast loading
- **Code splitting** for optimal bundle sizes
- **Responsive images** with proper sizing
- **Minimal JavaScript** thanks to Svelte's compilation
- **CDN distribution** via Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

MIT License - feel free to use this project as a starting point for your own blog!

## Support

If you encounter any issues or have questions:

1. Check the [SvelteKit documentation](https://kit.svelte.dev)
2. Review the [mdsvex documentation](https://mdsvex.pngwn.io)
3. Open an issue in this repository
