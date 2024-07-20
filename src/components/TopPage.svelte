<script>
	import Bg from './BG.svelte';
</script>

<Bg />
<section id="top" class="flex margin-40 flex-col justify-items-center items-center">
	<p id="mission">Our mission:</p>
	<div id="tagline"><p>Shaping <b>code</b>, illuminating <b>innovation</b>.</p></div>
</section>

<style>
	#top {
		margin-top: -96px;
		padding: 100px 30px 30px 30px;
	}
	p > b {
		font-size: 40px;
		text-shadow:
			0 0 10px #ffffff60,
			0 0 20px #ffffff60;
		font-weight: lighter;
	}
	p {
		font-size: 35px;
	}
	p,
	b {
		transition: all 0.5s;
	}
	#tagline {
		display: flex;
		font-family: var(--theme-font-family-heading);
	}
	b:hover {
		font-size: 45px;
	}
	#mission {
		margin-top: 40px;
		letter-spacing: -1px;
		margin-bottom: 20px;
		font-weight: 100;
		font-size: 18px;
	}
</style>
