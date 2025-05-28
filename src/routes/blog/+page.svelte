<script lang="ts">
	import { posts } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog - AgentSalad</title>
	<meta name="description" content="Read the latest articles about web development, SvelteKit, and modern programming techniques." />
</svelte:head>

<div class="blog-header">
	<h1>Blog</h1>
	<p>Crunchy insights into the agentic web and modern development</p>
</div>

<div class="posts-container">
	{#if posts.length > 0}
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
	{:else}
		<div class="no-posts">
			<p>No blog posts yet. Check back soon!</p>
		</div>
	{/if}
</div>

<style>
	.blog-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.blog-header h1 {
		font-size: 3.5rem;
		margin: 0 0 1rem;
		color: #2d5016;
		font-weight: 800;
		letter-spacing: -1px;
	}

	.blog-header p {
		font-size: 1.25rem;
		color: #4a7c59;
		margin: 0;
		font-weight: 400;
	}

	.posts-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2.5rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.post-card {
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
		border-radius: 1.5rem;
		padding: 2.5rem;
		box-shadow: 0 8px 32px rgba(45, 80, 22, 0.1);
		transition: all 0.3s ease;
		border: 1px solid rgba(255, 255, 255, 0.2);
		height: fit-content;
	}

	.post-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 48px rgba(45, 80, 22, 0.15);
		background: rgba(255, 255, 255, 0.95);
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		background: rgba(45, 80, 22, 0.1);
		color: #2d5016;
		padding: 0.4rem 1rem;
		border-radius: 1.5rem;
		font-size: 0.8rem;
		font-weight: 600;
		border: 1px solid rgba(45, 80, 22, 0.2);
	}

	.post-content h2 {
		margin: 0 0 1.5rem;
		font-size: 1.75rem;
		line-height: 1.3;
		font-weight: 700;
	}

	.post-content h2 a {
		color: #2d5016;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.post-content h2 a:hover {
		color: #4a7c59;
	}

	.post-excerpt {
		color: #4a7c59;
		margin: 0 0 2rem;
		line-height: 1.7;
		font-size: 1.05rem;
	}

	.post-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.9rem;
		color: #6b8e23;
		margin-bottom: 2rem;
		font-weight: 500;
	}

	.read-more {
		color: #2d5016;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.05rem;
		transition: all 0.2s ease;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.read-more:hover {
		color: #4a7c59;
		transform: translateX(4px);
	}

	.no-posts {
		grid-column: 1 / -1;
		text-align: center;
		padding: 4rem 2rem;
		color: #4a7c59;
		font-size: 1.2rem;
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
			gap: 2rem;
		}

		.post-card {
			padding: 2rem;
		}

		.post-content h2 {
			font-size: 1.5rem;
		}

		.post-meta {
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-start;
		}
	}
</style> 