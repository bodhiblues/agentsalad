<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import { getPost } from '$lib/posts';
	import PostLayout from '$lib/components/PostLayout.svelte';

	$: slug = $page.params.slug;
	$: post = getPost(slug);

	$: if (!post) {
		throw error(404, 'Post not found');
	}
</script>

<svelte:head>
	<title>{post?.title} - AgentSalad</title>
	<meta name="description" content={post?.excerpt} />
</svelte:head>

{#if post}
	<PostLayout 
		title={post.title}
		date={post.date}
		excerpt={post.excerpt}
		tags={post.tags}
		readTime={post.readTime}
	>
		<svelte:component this={post.content} />
	</PostLayout>
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