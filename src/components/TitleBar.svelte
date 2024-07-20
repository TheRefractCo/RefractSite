<script lang="ts">
	import logo from '../../src/logo.svg';

	function noprojs() {
		const projsbtn = document.getElementById('projsbtn');
		if (projsbtn) {
			projsbtn.innerText = 'none yet';
			setTimeout(() => {
				projsbtn.innerText = 'projects';
			}, 2000);
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			noprojs();
		}
	}
</script>

<div
	id="ttb"
	class="items-center flex margin-20 justify-center flex-row w-full h-24 sticky top-0 gap-10"
>
	<a
		type="button"
		id="projsbtn"
		class="btn !bg-transparent"
		on:click={noprojs}
		on:keydown={handleKeyDown}
		role="button"
		tabindex="0">projects</a
	>
	<a href="#top"><img src={logo} class="w-80 logo" alt="REFRACT Logo" /></a>
	<a type="button" class="btn !bg-transparent" href="#members">members</a>
</div>

<style>
	.logo,
	a {
		transition: all 0.5s;
	}
	.logo:hover {
		width: 20rem;
	}
	a:hover {
		scale: 1.1;
	}
	#ttb {
		background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), transparent);
	}
</style>
