import { siteConfig } from '$lib/config';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400' // Cache for 24 hours
		}
	});
}; 