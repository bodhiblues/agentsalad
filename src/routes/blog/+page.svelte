<script lang="ts">
	import { posts } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog - AgentSalad</title>
	<meta name="description" content="Read the latest articles about web development, SvelteKit, and modern programming techniques." />
</svelte:head>

<div class="blog-header">
	<h1>Blog</h1>
	<p>Insights, tutorials, and thoughts on modern web development</p>
</div>

<div class="posts-container">
	{#each posts as post}
		<article class="post-card">
			<div class="post-content">
				<div class="post-tags">
					{#each post.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
				<h2><a href="/blog/{post.slug}">{post.title}</a></h2>
				<p class="post-excerpt">{post.excerpt}</p>
				<div class="post-meta">
					<span class="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
						year: 'numeric', 
						month: 'long', 
						day: 'numeric' 
					})}</span>
					<span class="post-read-time">{post.readTime}</span>
				</div>
				<a href="/blog/{post.slug}" class="read-more">Read More →</a>
			</div>
		</article>
	{/each}
</div>

<style>
	.blog-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.blog-header h1 {
		font-size: 3rem;
		margin: 0 0 1rem;
		color: #333;
		font-weight: 700;
	}

	.blog-header p {
		font-size: 1.25rem;
		color: #666;
		margin: 0;
	}

	.posts-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.post-card {
		background: white;
		border-radius: 1rem;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s, box-shadow 0.2s;
		border: 1px solid #e5e7eb;
		height: fit-content;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tag {
		background: #f3f4f6;
		color: #374151;
		padding: 0.25rem 0.75rem;
		border-radius: 1rem;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.post-content h2 {
		margin: 0 0 1rem;
		font-size: 1.5rem;
		line-height: 1.3;
	}

	.post-content h2 a {
		color: #333;
		text-decoration: none;
		transition: color 0.2s;
	}

	.post-content h2 a:hover {
		color: #2563eb;
	}

	.post-excerpt {
		color: #666;
		margin: 0 0 1.5rem;
		line-height: 1.6;
	}

	.post-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.875rem;
		color: #888;
		margin-bottom: 1.5rem;
	}

	.read-more {
		color: #2563eb;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s;
	}

	.read-more:hover {
		color: #1d4ed8;
	}

	@media (max-width: 768px) {
		.blog-header h1 {
			font-size: 2.5rem;
		}

		.blog-header p {
			font-size: 1.125rem;
		}

		.posts-container {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.post-card {
			padding: 1.5rem;
		}
	}
</style> 