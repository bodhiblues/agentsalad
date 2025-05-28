<script lang="ts">
	import { getRecentPosts } from '$lib/posts';

	const recentPosts = getRecentPosts(3);
</script>

<svelte:head>
	<title>AgentSalad - Crunchy Insights into the Agentic Web</title>
	<meta name="description" content="Discover crunchy insights into the agentic web, AI agents, autonomous systems, and the future of intelligent web applications." />
</svelte:head>

<div class="hero">
	<h1>Welcome to AgentSalad</h1>
	<p class="hero-subtitle">Crunchy insights into the agentic web</p>
	<a href="/blog" class="cta-button">Explore Blog Posts</a>
</div>

<section class="recent-posts">
	{#if recentPosts.length > 0}
		{#each recentPosts as post}
			<article class="post-card">
				<div class="post-content">
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
				</div>
			</article>
		{/each}
	{:else}
		<div class="no-posts">
			<p>No blog posts yet. Check back soon!</p>
		</div>
	{/if}
</section>

<style>
	.hero {
		text-align: center;
		padding: 6rem 2rem 8rem;
		margin: -2rem -2rem 4rem;
	}

	.hero h1 {
		font-size: 4rem;
		font-weight: 800;
		margin: 0 0 1.5rem;
		color: #2d5016;
		letter-spacing: -1px;
		line-height: 1.1;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		margin: 0 0 3rem;
		color: #4a7c59;
		font-weight: 400;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 3rem;
	}

	.cta-button {
		display: inline-block;
		background: #2d5016;
		color: white;
		padding: 1.25rem 2.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 20px rgba(45, 80, 22, 0.3);
		border: 2px solid #2d5016;
	}

	.cta-button:hover {
		background: transparent;
		color: #2d5016;
		transform: translateY(-2px);
		box-shadow: 0 6px 25px rgba(45, 80, 22, 0.4);
	}

	.recent-posts {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: 800px;
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
	}

	.post-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 48px rgba(45, 80, 22, 0.15);
		background: rgba(255, 255, 255, 0.95);
	}

	.post-content h2 {
		margin: 0 0 1.5rem;
		font-size: 2rem;
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
		font-size: 1.1rem;
	}

	.post-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.95rem;
		color: #6b8e23;
		font-weight: 500;
	}

	.no-posts {
		text-align: center;
		padding: 4rem 2rem;
		color: #4a7c59;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.hero {
			margin: -1rem -1rem 3rem;
			padding: 4rem 1rem 5rem;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.25rem;
		}

		.cta-button {
			padding: 1rem 2rem;
			font-size: 1rem;
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
