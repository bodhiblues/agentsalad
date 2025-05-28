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
const template = `---
title: '${postTitle}'
date: '${date}'
excerpt: 'Add a brief description of your post here...'
tags: ['Tag1', 'Tag2']
readTime: '5 min read'
published: true
---

# ${postTitle}

Write your blog post content here using Markdown.

## Section Heading

You can use all standard Markdown features:

- Lists
- **Bold text**
- *Italic text*
- \`inline code\`
- Links: [SvelteKit](https://kit.svelte.dev)

### Code Blocks

\`\`\`javascript
function example() {
  console.log('Hello, world!');
}
\`\`\`

### Blockquotes

> This is a blockquote. You can use it for important notes or quotes.

## Conclusion

Wrap up your post with a conclusion.
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
fs.writeFileSync(filePath, template);

console.log(`✅ Created new post: ${filePath}`);
console.log(`📝 Edit the file to add your content`);
console.log(`🔗 URL will be: /blog/${slug}`); 