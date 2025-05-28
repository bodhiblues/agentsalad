<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>AgentSalad Blog</title>
	<meta name="description" content="A modern blog built with SvelteKit" />
</svelte:head>

<div class="app">
	<header>
		<nav>
			<div class="nav-container">
				<a href="/" class="logo">AgentSalad</a>
				<ul class="nav-links">
					<li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
					<li><a href="/blog" class:active={$page.url.pathname.startsWith('/blog')}>Blog</a></li>
					<li><a href="/about" class:active={$page.url.pathname === '/about'}>About</a></li>
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
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.6;
		color: #333;
		background-color: #fafafa;
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
		background: white;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 4rem;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		color: #2563eb;
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2rem;
	}

	.nav-links a {
		text-decoration: none;
		color: #666;
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-links a:hover,
	.nav-links a.active {
		color: #2563eb;
	}

	main {
		flex: 1;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		width: 100%;
	}

	footer {
		background: #f8f9fa;
		border-top: 1px solid #e9ecef;
		margin-top: 4rem;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
		color: #666;
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 0 1rem;
		}

		.nav-links {
			gap: 1rem;
		}

		main {
			padding: 1rem;
		}
	}
</style> 