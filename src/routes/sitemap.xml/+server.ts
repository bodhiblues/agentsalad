import { posts } from '$lib/posts';
import { siteConfig } from '$lib/config';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	// Static pages
	const staticPages = [
		{
			url: '',
			lastmod: new Date().toISOString(),
			changefreq: siteConfig.sitemapChangeFreq.homepage,
			priority: siteConfig.sitemapPriority.homepage
		},
		{
			url: '/blog',
			lastmod: new Date().toISOString(),
			changefreq: siteConfig.sitemapChangeFreq.blog,
			priority: siteConfig.sitemapPriority.blog
		}
	];

	// Dynamic blog posts
	const blogPosts = posts.map(post => ({
		url: `/blog/${post.slug}`,
		lastmod: new Date(post.date).toISOString(),
		changefreq: siteConfig.sitemapChangeFreq.posts,
		priority: siteConfig.sitemapPriority.posts
	}));

	// Combine all URLs
	const allPages = [...staticPages, ...blogPosts];

	// Generate XML sitemap
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		page => `	<url>
		<loc>${siteConfig.url}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600' // Cache for 1 hour
		}
	});
}; 