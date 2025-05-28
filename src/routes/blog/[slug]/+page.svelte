<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';

	// This would typically come from a CMS or markdown files
	const posts: Record<string, any> = {
		'getting-started-with-sveltekit': {
			title: 'Getting Started with SvelteKit',
			date: '2024-01-15',
			readTime: '5 min read',
			tags: ['SvelteKit', 'Tutorial', 'Web Development'],
			content: `
				<p>SvelteKit is a powerful framework for building web applications with Svelte. It provides everything you need to build a modern web app, including routing, server-side rendering, and more.</p>
				
				<h2>What is SvelteKit?</h2>
				<p>SvelteKit is the official application framework from the Svelte team. It's designed to be the fastest way to build Svelte apps, with built-in support for:</p>
				<ul>
					<li>File-based routing</li>
					<li>Server-side rendering (SSR)</li>
					<li>Static site generation (SSG)</li>
					<li>API routes</li>
					<li>Code splitting</li>
				</ul>

				<h2>Getting Started</h2>
				<p>To create a new SvelteKit project, you can use the following command:</p>
				<pre><code>npm create svelte@latest my-app
cd my-app
npm install
npm run dev</code></pre>

				<h2>Project Structure</h2>
				<p>A typical SvelteKit project has the following structure:</p>
				<ul>
					<li><code>src/routes/</code> - Your application routes</li>
					<li><code>src/lib/</code> - Reusable components and utilities</li>
					<li><code>static/</code> - Static assets</li>
					<li><code>src/app.html</code> - The main HTML template</li>
				</ul>

				<h2>Conclusion</h2>
				<p>SvelteKit makes it easy to build fast, modern web applications. With its intuitive file-based routing and powerful features, you can focus on building great user experiences.</p>
			`
		},
		'building-a-blog-with-sveltekit': {
			title: 'Building a Blog with SvelteKit',
			date: '2024-01-10',
			readTime: '8 min read',
			tags: ['SvelteKit', 'Blog', 'Netlify'],
			content: `
				<p>In this comprehensive guide, we'll walk through building a beautiful blog using SvelteKit and deploying it to Netlify.</p>
				
				<h2>Why SvelteKit for Blogging?</h2>
				<p>SvelteKit offers several advantages for building blogs:</p>
				<ul>
					<li>Fast performance with minimal JavaScript</li>
					<li>Built-in SSG support for static blogs</li>
					<li>Excellent SEO capabilities</li>
					<li>Modern development experience</li>
				</ul>

				<h2>Setting Up the Project</h2>
				<p>First, let's create a new SvelteKit project:</p>
				<pre><code>npm create svelte@latest my-blog
cd my-blog
npm install</code></pre>

				<h2>Creating the Blog Structure</h2>
				<p>We'll need to create several components:</p>
				<ul>
					<li>A layout component for consistent styling</li>
					<li>A blog listing page</li>
					<li>Individual blog post pages</li>
					<li>Navigation components</li>
				</ul>

				<h2>Adding Content</h2>
				<p>For this example, we're using static content, but you could easily integrate with a headless CMS like Strapi, Contentful, or use markdown files.</p>

				<h2>Deployment to Netlify</h2>
				<p>Netlify makes deployment simple. Just connect your GitHub repository and Netlify will automatically build and deploy your site on every push.</p>
			`
		},
		'modern-web-development': {
			title: 'Modern Web Development in 2024',
			date: '2024-01-05',
			readTime: '6 min read',
			tags: ['Web Development', 'Trends', '2024'],
			content: `
				<p>The web development landscape continues to evolve rapidly. Let's explore the key trends and technologies shaping modern web development in 2024.</p>
				
				<h2>Key Trends</h2>
				<p>Several trends are defining modern web development:</p>
				<ul>
					<li>Component-based architectures</li>
					<li>JAMstack and static site generation</li>
					<li>Edge computing and serverless functions</li>
					<li>Progressive Web Apps (PWAs)</li>
					<li>Web Assembly (WASM)</li>
				</ul>

				<h2>Popular Frameworks</h2>
				<p>The framework landscape is more diverse than ever:</p>
				<ul>
					<li><strong>React</strong> - Still the most popular choice</li>
					<li><strong>Vue.js</strong> - Great for progressive enhancement</li>
					<li><strong>Svelte/SvelteKit</strong> - Compile-time optimizations</li>
					<li><strong>Next.js</strong> - Full-stack React framework</li>
					<li><strong>Nuxt.js</strong> - Vue.js meta-framework</li>
				</ul>

				<h2>Development Tools</h2>
				<p>Modern tooling has made development more efficient:</p>
				<ul>
					<li>Vite for fast builds</li>
					<li>TypeScript for type safety</li>
					<li>Tailwind CSS for utility-first styling</li>
					<li>ESLint and Prettier for code quality</li>
				</ul>

				<h2>Looking Forward</h2>
				<p>The future of web development looks exciting with continued focus on performance, developer experience, and user experience.</p>
			`
		},
		'typescript-best-practices': {
			title: 'TypeScript Best Practices for 2024',
			date: '2024-01-01',
			readTime: '7 min read',
			tags: ['TypeScript', 'Best Practices', 'Code Quality'],
			content: `
				<p>TypeScript has become an essential tool for modern web development. Here are the best practices to follow in 2024.</p>
				
				<h2>Type Definitions</h2>
				<p>Always prefer explicit type definitions over <code>any</code>:</p>
				<pre><code>// Good
interface User {
  id: number;
  name: string;
  email: string;
}

// Avoid
const user: any = { id: 1, name: 'John' };</code></pre>

				<h2>Utility Types</h2>
				<p>Leverage TypeScript's built-in utility types:</p>
				<ul>
					<li><code>Partial&lt;T&gt;</code> - Make all properties optional</li>
					<li><code>Required&lt;T&gt;</code> - Make all properties required</li>
					<li><code>Pick&lt;T, K&gt;</code> - Select specific properties</li>
					<li><code>Omit&lt;T, K&gt;</code> - Exclude specific properties</li>
				</ul>

				<h2>Strict Configuration</h2>
				<p>Use strict TypeScript configuration:</p>
				<pre><code>{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}</code></pre>

				<h2>Generic Types</h2>
				<p>Use generics for reusable type-safe code:</p>
				<pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}</code></pre>

				<h2>Conclusion</h2>
				<p>Following these best practices will help you write more maintainable and type-safe TypeScript code.</p>
			`
		},
		'css-grid-vs-flexbox': {
			title: 'CSS Grid vs Flexbox: When to Use Which',
			date: '2023-12-28',
			readTime: '4 min read',
			tags: ['CSS', 'Layout', 'Grid', 'Flexbox'],
			content: `
				<p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Let's explore when to use each.</p>
				
				<h2>Flexbox: One-Dimensional Layouts</h2>
				<p>Flexbox is perfect for one-dimensional layouts:</p>
				<ul>
					<li>Navigation bars</li>
					<li>Button groups</li>
					<li>Centering content</li>
					<li>Distributing space between items</li>
				</ul>

				<h2>CSS Grid: Two-Dimensional Layouts</h2>
				<p>CSS Grid excels at two-dimensional layouts:</p>
				<ul>
					<li>Page layouts</li>
					<li>Card grids</li>
					<li>Complex responsive designs</li>
					<li>Overlapping elements</li>
				</ul>

				<h2>Practical Examples</h2>
				<p>Here's when to choose each:</p>
				<pre><code>/* Flexbox for navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid for page layout */
.page {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}</code></pre>

				<h2>Can They Work Together?</h2>
				<p>Absolutely! You can use Grid for the overall page layout and Flexbox for component-level layouts.</p>

				<h2>Conclusion</h2>
				<p>Both Grid and Flexbox are essential tools. Use Grid for two-dimensional layouts and Flexbox for one-dimensional layouts.</p>
			`
		}
	};

	$: slug = $page.params.slug;
	$: post = posts[slug];

	$: if (!post) {
		throw error(404, 'Post not found');
	}
</script>

<svelte:head>
	<title>{post?.title} - AgentSalad</title>
	<meta name="description" content={post?.title} />
</svelte:head>

{#if post}
	<article class="post">
		<header class="post-header">
			<div class="post-tags">
				{#each post.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
			<h1>{post.title}</h1>
			<div class="post-meta">
				<span class="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
					year: 'numeric', 
					month: 'long', 
					day: 'numeric' 
				})}</span>
				<span class="post-read-time">{post.readTime}</span>
			</div>
		</header>

		<div class="post-content">
			{@html post.content}
		</div>

		<footer class="post-footer">
			<a href="/blog" class="back-link">← Back to Blog</a>
		</footer>
	</article>
{/if}

<style>
	.post {
		max-width: 800px;
		margin: 0 auto;
	}

	.post-header {
		text-align: center;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e5e7eb;
	}

	.post-tags {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		background: #f3f4f6;
		color: #374151;
		padding: 0.25rem 0.75rem;
		border-radius: 1rem;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.post h1 {
		font-size: 2.5rem;
		margin: 0 0 1rem;
		color: #333;
		font-weight: 700;
		line-height: 1.2;
	}

	.post-meta {
		display: flex;
		justify-content: center;
		gap: 2rem;
		font-size: 0.875rem;
		color: #888;
	}

	.post-content {
		line-height: 1.8;
		color: #374151;
	}

	:global(.post-content h2) {
		font-size: 1.75rem;
		margin: 2.5rem 0 1rem;
		color: #333;
		font-weight: 600;
	}

	:global(.post-content h3) {
		font-size: 1.5rem;
		margin: 2rem 0 1rem;
		color: #333;
		font-weight: 600;
	}

	:global(.post-content p) {
		margin: 1.5rem 0;
	}

	:global(.post-content ul, .post-content ol) {
		margin: 1.5rem 0;
		padding-left: 2rem;
	}

	:global(.post-content li) {
		margin: 0.5rem 0;
	}

	:global(.post-content pre) {
		background: #f8f9fa;
		border: 1px solid #e9ecef;
		border-radius: 0.5rem;
		padding: 1.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	:global(.post-content code) {
		background: #f8f9fa;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
		font-size: 0.875rem;
	}

	:global(.post-content pre code) {
		background: none;
		padding: 0;
	}

	.post-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #e5e7eb;
	}

	.back-link {
		color: #2563eb;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s;
	}

	.back-link:hover {
		color: #1d4ed8;
	}

	@media (max-width: 768px) {
		.post h1 {
			font-size: 2rem;
		}

		.post-meta {
			flex-direction: column;
			gap: 0.5rem;
		}

		:global(.post-content pre) {
			padding: 1rem;
			font-size: 0.875rem;
		}
	}
</style> 