<svelte:head>
	<title>About - AgentSalad</title>
	<meta name="description" content="Learn more about AgentSalad and our mission to share crunchy insights into the agentic web." />
</svelte:head>

<div class="about-container">
	<div class="about-header">
		<h1>About AgentSalad</h1>
		<p class="subtitle">Crunchy insights into the agentic web</p>
	</div>

	<div class="about-content">
		<section class="intro">
			<h2>Welcome to Our Blog</h2>
			<p>
				AgentSalad is a modern web development blog focused on the emerging agentic web - 
				where AI agents, autonomous systems, and intelligent applications are reshaping 
				how we build and interact with digital experiences. We share practical insights, 
				tutorials, and best practices for developers navigating this exciting frontier.
			</p>
		</section>

		<section class="mission">
			<h2>Our Mission</h2>
			<p>
				We believe in making the agentic web accessible and understandable for everyone. Our goal 
				is to provide clear, actionable content that helps developers at all levels understand 
				and build with AI agents, autonomous systems, and the technologies that power the next 
				generation of web applications.
			</p>
		</section>

		<section class="topics">
			<h2>What We Cover</h2>
			<div class="topics-grid">
				<div class="topic-card">
					<h3>🚀 Modern Frameworks</h3>
					<p>Deep dives into SvelteKit, React, Vue.js, and other cutting-edge frameworks.</p>
				</div>
				<div class="topic-card">
					<h3>🎨 UI/UX Design</h3>
					<p>Best practices for creating beautiful and user-friendly interfaces.</p>
				</div>
				<div class="topic-card">
					<h3>⚡ Performance</h3>
					<p>Techniques for building fast, optimized web applications.</p>
				</div>
				<div class="topic-card">
					<h3>🛠️ Developer Tools</h3>
					<p>Reviews and tutorials on the latest development tools and workflows.</p>
				</div>
			</div>
		</section>

		<section class="tech-stack">
			<h2>Built With</h2>
			<p>This blog is built using modern web technologies:</p>
			<ul>
				<li><strong>SvelteKit</strong> - For the framework and routing</li>
				<li><strong>TypeScript</strong> - For type safety and better developer experience</li>
				<li><strong>CSS</strong> - For styling with modern CSS features</li>
				<li><strong>Netlify</strong> - For hosting and continuous deployment</li>
				<li><strong>GitHub</strong> - For version control and collaboration</li>
			</ul>
		</section>

		<section class="contact">
			<h2>Get In Touch</h2>
			<p>
				Have questions, suggestions, or want to contribute? We'd love to hear from you! 
				Feel free to reach out through any of the following channels:
			</p>
			<div class="contact-links">
				<a href="mailto:hello@agentsalad.com" class="contact-link">
					📧 Email Us
				</a>
				<a href="https://github.com/agentsalad" class="contact-link">
					🐙 GitHub
				</a>
				<a href="https://twitter.com/agentsalad" class="contact-link">
					🐦 Twitter
				</a>
			</div>
		</section>
	</div>
</div>

<style>
	.about-container {
		max-width: 800px;
		margin: 0 auto;
	}

	.about-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.about-header h1 {
		font-size: 3rem;
		margin: 0 0 1rem;
		color: #333;
		font-weight: 700;
	}

	.subtitle {
		font-size: 1.25rem;
		color: #666;
		margin: 0;
	}

	.about-content {
		line-height: 1.8;
		color: #374151;
	}

	.about-content section {
		margin-bottom: 3rem;
	}

	.about-content h2 {
		font-size: 2rem;
		margin: 0 0 1.5rem;
		color: #333;
		font-weight: 600;
	}

	.about-content p {
		margin: 1.5rem 0;
		font-size: 1.125rem;
	}

	.topics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.topic-card {
		background: white;
		border: 1px solid #e5e7eb;
		border-radius: 1rem;
		padding: 1.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.topic-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.topic-card h3 {
		margin: 0 0 1rem;
		font-size: 1.25rem;
		color: #333;
	}

	.topic-card p {
		margin: 0;
		font-size: 1rem;
		color: #666;
	}

	.about-content ul {
		margin: 1.5rem 0;
		padding-left: 2rem;
	}

	.about-content li {
		margin: 0.75rem 0;
		font-size: 1.125rem;
	}

	.contact-links {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.contact-link {
		display: inline-block;
		background: #2563eb;
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-weight: 600;
		transition: background-color 0.2s, transform 0.2s;
	}

	.contact-link:hover {
		background: #1d4ed8;
		transform: translateY(-1px);
	}

	@media (max-width: 768px) {
		.about-header h1 {
			font-size: 2.5rem;
		}

		.about-content h2 {
			font-size: 1.75rem;
		}

		.topics-grid {
			grid-template-columns: 1fr;
		}

		.contact-links {
			flex-direction: column;
		}

		.contact-link {
			text-align: center;
		}
	}
</style> 