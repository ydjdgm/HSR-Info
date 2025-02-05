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
	<a class="logoA {isOpen ? '' : 'collapsedLogoA'}" href="/"><img src="/starrail_logo.png" alt="Starrail Logo" /></a>
	<ul class="menuLi">
		<li class="menuEle"><a href="/"><button class="eleABtn"><img class="eleABtnImg {isOpen ? '' : 'collapsedEleABtnImg'}" src="/navbar/home.png" alt="home"><h1 class="eleABtnH1 {isOpen ? '' : 'collapsedEleABtnH1'}">Home</h1></button></a></li>
		<li class="menuEle"><a href="/char"><button class="eleABtn"><img class="eleABtnImg {isOpen ? '' : 'collapsedEleABtnImg'}" src="/navbar/char.png" alt="char"><h1 class="eleABtnH1">Character</h1></button></a></li>
		<li class="menuEle"><a href="/lightcone"><button class="eleABtn"><img class="eleABtnImg {isOpen ? '' : 'collapsedEleABtnImg'}" src="/navbar/lightcone.png" alt="lightcone"><h1 class="eleABtnH1">Lightcone</h1></button></a></li>
		<li class="menuEle"><a href="/relic"><button class="eleABtn"><img class="eleABtnImg {isOpen ? '' : 'collapsedEleABtnImg'}" src="/navbar/relic.png" alt="relic"><h1 class="eleABtnH1">Relic</h1></button></a></li>
		<!-- <li class = "menuElement"><a class="navA" href="/"><button class="navButton {isOpen ? '' : 'collapsedNavButton'}"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}" src="/navbar/home.png" alt="home">Home</button></a>
		<li class = "menuElement"><a class="navA" href="/char"><button class="navButton"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}" src="/navbar/char.png" alt="char">Character</button></a>
		<li class = "menuElement"><a class="navA" href="/lightcone"><button class="navButton"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}" src="/navbar/lightcone.png" alt="lightcone">Lightcone</button></a>
		<li class = "menuElement"><a class="navA" href="/relic"><button class="navButton"><img class="navIcon {isOpen ? '' : 'collapsedNavIcon'}" src="/navbar/relic.png" alt="relic">Relic</button></a> -->
	</ul>
</div>

<style>
	.navbar {
		position: fixed;
		width: 13vw;
		height: 100vh;
		display: block;
		justify-content: center;
		top: 0;
		overflow-y: auto;
		scrollbar-width: none;
		background: #010131;

		transition: transform 0.3s ease;
		transform: translateX(0);
	}.collapsedNavbar {
		transform: translateX(-80%);
	}

	.toggleBtn {
		position: absolute;
		width: 10%;
		height: 4%;
		top: 1%;
		right: 5%;
		/* background: transparent; */
		background-color: rgb(27, 107, 177);
		color: white;
		z-index: 1;
		font-size: 1vw;
	}

	.logoA{
		display: block;
		margin: 0 auto;
		width: 11vw;
		height: 20vh;
		visibility: visible;
		opacity: 1;
		transition: opacity 0.3s ease;
	}.collapsedLogoA{
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s 0.3s, opacity 0.3s ease;
	}

	.menuLi{
		display: block;
	}

	.menuEle{
		display: flex;
	}

	.eleABtn{
		display: flex;
		width: 13vw;
		background-color: rgb(72, 100, 100);
	}

	.eleABtnImg{
		width: 3vw;
		transition: transform 0.3s ease;
	}.collapsedEleABtnImg{
		transform: translateX(10vw) translateY(-3vh);
	}

	.eleABtnH1{
		font-size: 1.5vw;
		color: white;
		visibility: visible;
		opacity: 1;
		transition: opacity 0.3s ease;
	}.collapsedEleABtnH1{
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s 0.3s, opacity 0.3s ease;
	}
</style>
