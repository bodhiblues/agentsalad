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
	<p class="hero-subtitle">Crunchy Insights into the Agentic Web</p>
	<a href="/blog" class="cta-button">Explore Blog Posts</a>
</div>

<section class="recent-posts">
	<h2>Recent Posts</h2>
	<div class="posts-grid">
		{#each recentPosts as post}
			<article class="post-card">
				<div class="post-content">
					<h3><a href="/blog/{post.slug}">{post.title}</a></h3>
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
	</div>
	<div class="view-all">
		<a href="/blog" class="view-all-link">View All Posts →</a>
	</div>
</section>

<style>
	.hero {
		text-align: center;
		padding: 4rem 0 6rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		margin: -2rem -2rem 4rem;
		border-radius: 0 0 2rem 2rem;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		margin: 0 0 1rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.hero-subtitle {
		font-size: 1.25rem;
		margin: 0 0 2rem;
		opacity: 0.9;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-button {
		display: inline-block;
		background: white;
		color: #667eea;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		transition: transform 0.2s, box-shadow 0.2s;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	.recent-posts h2 {
		font-size: 2.5rem;
		margin: 0 0 2rem;
		color: #333;
		text-align: center;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.post-card {
		background: white;
		border-radius: 1rem;
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s, box-shadow 0.2s;
		border: 1px solid #e5e7eb;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	}

	.post-content h3 {
		margin: 0 0 1rem;
		font-size: 1.5rem;
		line-height: 1.3;
	}

	.post-content h3 a {
		color: #333;
		text-decoration: none;
		transition: color 0.2s;
	}

	.post-content h3 a:hover {
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
	}

	.view-all {
		text-align: center;
	}

	.view-all-link {
		color: #2563eb;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.125rem;
		transition: color 0.2s;
	}

	.view-all-link:hover {
		color: #1d4ed8;
	}

	@media (max-width: 768px) {
		.hero {
			margin: -1rem -1rem 3rem;
			padding: 3rem 1rem 4rem;
		}

		.hero h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.125rem;
		}

		.posts-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.post-card {
			padding: 1.5rem;
		}
	}
</style>
