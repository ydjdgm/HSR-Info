<script>
	import { is } from 'drizzle-orm';

	let isOpen = true;
	function toggleNavbar() {
		isOpen = !isOpen;
	}
</script>

<div class="navbar {isOpen ? '' : 'collapsedNavbar'}">
	<button class="toggleBtn" on:click={toggleNavbar}>
		{isOpen ? 'X' : '☰'}
	</button>
	<img class="logo" src="/starrail_logo.png" alt="Starrail Logo" />
	<ul class="menuList">
		<li class = "menuElement"><a href="/"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}" src="/navbar/home.png" alt="Home"/>Home</a></li>
		<li class = "menuElement"><a href="/char"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}"src="/navbar/char.png"alt="Char"/>Characters</a></li>
		<li class = "menuElement"><a href="/lightcone"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}" src="/navbar/lightcone.png" alt="Lightcone"/>Lightcones</a></li>
		<li class = "menuElement"><a href="/relic"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}" src="/navbar/relic.png" alt="Relic"/>Relic</a></li>
	</ul>
</div>

<style>
	.navbar {
		width: 250px;
		background: #0c0c1f;
		color: white;
		height: 100vh;
		transition: transform 0.3s ease;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		transform: translateX(0);
	}

	.collapsedNavbar {
		transform: translateX(-80%);
	}

    .logo {
		position: relative;
        right: 20px;
        bottom: 40px;
		width: 180px;
		margin: 20px auto;
		display: block;
	}

	.toggleBtn {
		position: absolute;
		top: 10px;
		right: 10px;
		background: transparent;
		border: none;
		color: white;
		padding: 5px 10px;
		cursor: pointer;
		border-radius: 4px;
	}

    .menuList {
        position: relative;
        bottom: 80px;
        left: 45px;
    }

    .menuElement {
        margin: 10px;
        margin-bottom: 30px;
    }

	.navIcon {
		position: absolute;
		width: 30px;
		height: 30px;
        right: 255px;
		transition: transform 0.3s ease;
	}

	.collapsedNavIcon {
		transform: translateX(200px) translateY(-80px);
	}
</style>
