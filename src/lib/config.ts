// Site configuration
export const siteConfig = {
	name: 'AgentSalad',
	url: 'https://www.agentsalad.com', // Updated to use www version
	description: 'Crunchy insights into the agentic web',
	author: 'AgentSalad Team',
	
	// SEO settings
	defaultOgImage: '/logo-512.png',
	twitterHandle: '@agentsalad', // Update if you have a Twitter account
	
	// Sitemap settings
	sitemapChangeFreq: {
		homepage: 'weekly',
		blog: 'weekly',
		posts: 'monthly'
	},
	
	sitemapPriority: {
		homepage: '1.0',
		blog: '0.8',
		posts: '0.7'
	}
}; 