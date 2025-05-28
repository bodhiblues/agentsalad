<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>AgentSalad Blog</title>
	<meta name="description" content="A modern blog built with SvelteKit" />
	<link rel="icon" href="/logo.png" />
</svelte:head>

<div class="app">
	<header>
		<nav>
			<div class="nav-container">
				<a href="/" class="logo">
					<picture>
						<source srcset="/logo-64.webp" type="image/webp">
						<img src="/logo-64.png" alt="AgentSalad Logo" class="logo-icon" />
					</picture>
					<span class="logo-text">AGENTSALAD</span>
				</a>
				<ul class="nav-links">
					<li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
					<li><a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>Blog</a></li>
				</ul>
			</div>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-container">
			<p>&copy; 2024 AgentSalad. Built with SvelteKit.</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		line-height: 1.6;
		color: #2d5016;
		background: linear-gradient(135deg, #f0f8e8 0%, #e8f5d8 50%, #f0f8e8 100%);
		min-height: 100vh;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header {
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		box-shadow: 0 2px 20px rgba(45, 80, 22, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
		border-bottom: 1px solid rgba(45, 80, 22, 0.1);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4.5rem;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		transition: transform 0.2s ease;
	}

	.logo:hover {
		transform: scale(1.05);
	}

	.logo-icon {
		width: 2.5rem;
		height: 2.5rem;
		object-fit: contain;
		filter: drop-shadow(0 2px 4px rgba(45, 80, 22, 0.2));
		display: block;
	}

	.logo-text {
		font-size: 1.5rem;
		font-weight: 800;
		color: #2d5016;
		letter-spacing: -0.5px;
	}

	.nav-links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2.5rem;
	}

	.nav-links a {
		text-decoration: none;
		color: #2d5016;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.2s ease;
		position: relative;
	}

	.nav-links a:hover,
	.nav-links a.active {
		color: #4a7c59;
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 0;
		height: 2px;
		background: #4a7c59;
		transition: width 0.3s ease;
	}

	.nav-links a:hover::after,
	.nav-links a.active::after {
		width: 100%;
	}

	main {
		flex: 1;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		width: 100%;
	}

	footer {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		border-top: 1px solid rgba(45, 80, 22, 0.1);
		margin-top: 4rem;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		color: #2d5016;
		opacity: 0.7;
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 0 1rem;
		}

		.nav-links {
			gap: 1.5rem;
		}

		.logo-icon {
			width: 2rem;
			height: 2rem;
		}

		.logo-text {
			font-size: 1.25rem;
		}

		main {
			padding: 1rem;
		}
	}
</style> 