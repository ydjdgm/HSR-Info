<script>
	import Navbar from '$lib/Navbar.svelte';
	import Frame from '$lib/Frame.svelte';
	import CharacterCard from '$lib/CharCard.svelte';
	import { onMount } from 'svelte';

	let characters = [];

	onMount(async () => {
    const res = await fetch('/api/characters'); // API 요청
    characters = await res.json();
 	});
</script>
<Navbar />
<Frame>
	<h1>Character</h1>
	<div class="charGrid">
		{#each characters as character}
			<CharacterCard character={character} />
		{/each}
	</div>
	<a href="https://wiki.hoyolab.com/pc/hsr/aggregate/104">HoYoWiKi/char</a>
</Frame>



<style>
	h1 {
		text-align: center;
		color: white;
	}
	a {
		position: relative;
		display: block;
		text-align: center;
		color: white;
	}

	.charGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  	}
</style>