import { dev } from '$app/environment';
import type { ComponentType } from 'svelte';

// Types for our posts
export interface Post {
	slug: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	tags: string[];
	published: boolean;
	content?: ComponentType;
}

// Import all markdown files from the posts directory
const modules = import.meta.glob('/src/posts/*.md', { eager: true });

export const posts: Post[] = Object.entries(modules)
	.map(([path, module]: [string, any]) => {
		const slug = path.split('/').pop()?.replace('.md', '') || '';
		
		return {
			slug,
			title: module.metadata.title,
			excerpt: module.metadata.excerpt,
			date: module.metadata.date,
			readTime: module.metadata.readTime,
			tags: module.metadata.tags,
			published: module.metadata.published,
			content: module.default as ComponentType
		};
	})
	.filter(post => dev || post.published)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPost(slug: string): Post | undefined {
	return posts.find(post => post.slug === slug);
}

export function getRecentPosts(limit: number = 3): Post[] {
	return posts.slice(0, limit);
} 