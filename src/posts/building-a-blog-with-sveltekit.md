---
title: 'Building a Blog with SvelteKit'
date: '2024-01-10'
excerpt: 'A step-by-step guide to creating a beautiful blog using SvelteKit and deploying it to Netlify. Perfect for developers looking to create their own blog.'
tags: ['SvelteKit', 'Blog', 'Netlify']
readTime: '8 min read'
published: true
---

In this comprehensive guide, we'll walk through building a beautiful blog using SvelteKit and deploying it to Netlify.

## Why SvelteKit for Blogging?

SvelteKit offers several advantages for building blogs:

- **Fast performance** with minimal JavaScript
- **Built-in SSG support** for static blogs
- **Excellent SEO capabilities**
- **Modern development experience**
- **Markdown support** with mdsvex

## Setting Up the Project

First, let's create a new SvelteKit project:

```bash
npm create svelte@latest my-blog
cd my-blog
npm install
```

Choose the following options:
- Template: Skeleton project
- Type checking: Yes, using TypeScript
- Additional options: Add ESLint, Prettier

## Installing Dependencies

For a markdown-based blog, we'll need mdsvex:

```bash
npm install -D mdsvex @tailwindcss/typography
```

## Project Structure

Here's how we'll organize our blog:

```
src/
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── blog/
│   │   ├── +page.svelte
│   │   └── [slug]/
│   │       └── +page.svelte
│   └── about/
│       └── +page.svelte
├── posts/
│   ├── post-1.md
│   ├── post-2.md
│   └── post-3.md
└── lib/
    ├── components/
    │   └── PostLayout.svelte
    └── posts.ts
```

## Creating the Blog Structure

### 1. Configure mdsvex

Update your `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        _: './src/lib/components/PostLayout.svelte'
      }
    })
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;
```

### 2. Create Post Layout

The `PostLayout.svelte` component will wrap all markdown posts:

```svelte
<script lang="ts">
  export let title: string;
  export let date: string;
  export let excerpt: string;
  export let tags: string[];
  export let readTime: string;
</script>

<svelte:head>
  <title>{title} - My Blog</title>
  <meta name="description" content={excerpt} />
</svelte:head>

<article class="post">
  <header>
    <h1>{title}</h1>
    <div class="meta">
      <time>{date}</time>
      <span>{readTime}</span>
    </div>
  </header>
  
  <div class="content">
    <slot />
  </div>
</article>
```

### 3. Posts Utility

Create `src/lib/posts.ts` to handle post loading:

```typescript
import { dev } from '$app/environment';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

const modules = import.meta.glob('/src/posts/*.md', { eager: true });

export const posts: Post[] = Object.entries(modules)
  .map(([path, module]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    return {
      slug,
      ...module.metadata
    };
  })
  .filter(post => dev || post.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
```

## Writing Blog Posts

Create markdown files in `src/posts/` with frontmatter:

```markdown
---
title: 'My First Post'
date: '2024-01-15'
excerpt: 'This is my first blog post...'
tags: ['Tutorial', 'SvelteKit']
readTime: '5 min read'
published: true
---

# My First Post

Content goes here...
```

## Deployment to Netlify

### Option 1: GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect SvelteKit and deploy

### Option 2: Manual Deploy

```bash
npm run build
# Upload the build folder to Netlify
```

## SEO Optimization

SvelteKit provides excellent SEO capabilities:

- **Server-side rendering** for better crawling
- **Meta tags** in each post layout
- **Structured data** for rich snippets
- **Sitemap generation** for better indexing

## Performance Benefits

Your SvelteKit blog will be incredibly fast because:

- **Static generation** eliminates server requests
- **Code splitting** loads only what's needed
- **Minimal JavaScript** reduces bundle size
- **Optimized images** with SvelteKit's built-in optimization

## Conclusion

SvelteKit makes building a blog both enjoyable and performant. With markdown support, excellent SEO, and easy deployment, you can focus on writing great content while SvelteKit handles the technical details.

The combination of SvelteKit's developer experience and Netlify's deployment simplicity creates the perfect blogging platform for modern developers. 