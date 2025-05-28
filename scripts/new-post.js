#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get post title from command line arguments
const postTitle = process.argv[2];

if (!postTitle) {
  console.error('Please provide a post title:');
  console.error('npm run new-post "Your Post Title"');
  process.exit(1);
}

// Generate slug from title
const slug = postTitle
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

// Get current date
const date = new Date().toISOString().split('T')[0];

// Create post template
const frontmatter = `---
title: '${postTitle}'
date: '${date}'
excerpt: 'A brief description of your post that will appear in the blog listing and search results.'
tags: ['Tag1', 'Tag2']
readTime: '5 min read'
published: false
seo:
  title: 'Custom SEO title (optional - defaults to post title + site name)'
  description: 'Custom meta description for search engines (optional - defaults to excerpt)'
  ogImage: '/images/your-post-og-image.jpg'
  ogType: 'article'
  twitterCard: 'summary_large_image'
---

# ${postTitle}

Your post content goes here...

## Section Heading

Write your amazing content!
`;

// Write the file
const postsDir = path.join(__dirname, '..', 'src', 'posts');
const filePath = path.join(postsDir, `${slug}.md`);

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.error(`Post with slug "${slug}" already exists!`);
  process.exit(1);
}

// Create posts directory if it doesn't exist
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Write the file
fs.writeFileSync(filePath, frontmatter);

console.log(`✅ Created new post: ${filePath}`);
console.log(`📝 Edit the file to add your content`);
console.log(`🔗 URL will be: /blog/${slug}`); 