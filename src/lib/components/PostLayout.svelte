<script lang="ts">
	import type { SEOData } from '$lib/posts';
	
	export let title: string;
	export let date: string;
	export let excerpt: string;
	export let tags: string[];
	export let readTime: string;
	export let seo: SEOData | undefined = undefined;

	// SEO values with fallbacks
	$: seoTitle = seo?.title || `${title} - AgentSalad`;
	$: seoDescription = seo?.description || excerpt;
	$: ogImage = seo?.ogImage || '/logo.png';
	$: ogType = seo?.ogType || 'article';
	$: twitterCard = seo?.twitterCard || 'summary';
	$: canonical = seo?.canonical;
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content="AgentSalad" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content={twitterCard} />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
	<meta name="twitter:image" content={ogImage} />
	
	<!-- Article specific -->
	<meta property="article:published_time" content={date} />
	{#each tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}
	
	<!-- Canonical URL -->
	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}
</svelte:head>

<article class="post">
	<header class="post-header">
		<div class="post-tags">
			{#each tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
		<h1>{title}</h1>
		<div class="post-meta">
			<span class="post-date">{new Date(date).toLocaleDateString('en-US', { 
				year: 'numeric', 
				month: 'long', 
				day: 'numeric' 
			})}</span>
			<span class="post-read-time">{readTime}</span>
		</div>
	</header>

	<div class="post-content prose">
		<slot />
	</div>

	<footer class="post-footer">
		<a href="/blog" class="back-link">← Back to Blog</a>
	</footer>
</article>

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
		font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
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

	:global(.post-content blockquote) {
		border-left: 4px solid #2563eb;
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: #666;
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