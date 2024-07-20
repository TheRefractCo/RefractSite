<script>
	import Bg from './BG.svelte';
</script>

<Bg />
<section id="top" class="flex margin-40 flex-col justify-items-center items-center">
	<p id="mission" class="smalltxt">Our mission:</p>
	<div id="tagline"><p>Shaping <b>code</b>, illuminating <b>innovation</b>.</p></div>
	<br />
	<div id="texts" class="flex margin-20 flex-row gap-10">
		<div id="who" class="textframe">
			<p class="smalltxt">Wait, who actually <i>are</i> <b>you</b>?</p>
			<p>
				We're two designers and developers - p3rid0t and shefer, trying to put ourselves out there
				with projects.
			</p>
		</div>
		<div id="exp" class="textframe">
			<p class="smalltxt">..any experience?</p>
			<p>For both of us:</p>
			<ul style="list-style-type: disc; margin-left:20px;">
				<li>Flutter</li>
				<li>UWP</li>
				<li>C#</li>
				<li>JavaScript</li>
				<li>Svelte</li>
			</ul>
		</div>
		<div id="what" class="textframe">
			<p class="smalltxt">And <i>what</i> is <b>this</b>?</p>
			<p>
				This is our joint initiative and the place for stuff we do together 🤝, started in July of
				2024.
			</p>
		</div>
	</div>
</section>

<style>
	#what {
		height: 230px;
		width: 250px;
	}
	#who {
		width: 250px;
		height: 230px;
	}
	#exp {
		width: 220px;
		height: 230px;
	}
	#texts {
		margin-top: 50px;
		letter-spacing: -1px;
	}
	.textframe {
		border: 1px solid white;
		border-radius: 20px;
		padding: 20px;
	}
	#top {
		margin-top: -96px;
		padding: 100px 30px 30px 30px;
		margin-bottom: 350px;
	}
	#tagline > p > b {
		font-size: 40px;
		text-shadow:
			0 0 10px #ffffff60,
			0 0 20px #ffffff60;
		font-weight: lighter;
	}
	#tagline > p {
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
	#tagline > p > b:hover {
		font-size: 45px;
	}
	b:hover {
		font-size: 25px;
	}
	.smalltxt {
		letter-spacing: -1px;
		margin-bottom: 20px;
		font-weight: 100;
		font-size: 18px;
	}
	#mission {
		margin-top: 40px;
	}
</style>
