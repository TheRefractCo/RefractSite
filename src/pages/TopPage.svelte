
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
	@media screen and (max-width: 750px) {
		#top {
			margin-bottom: 0px;
		}
	}
	@media screen and (max-width: 850px) {
		#texts {
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}
	}
	@keyframes reveal4others {
		0% {
			opacity: 0%;
			filter: blur(20px);
		}
		100% {
			opacity: 100%;
			filter: blur(0px);
		}
	}
	#what {
		height: 230px;
		width: 250px;
		opacity: 0;
		animation: reveal4others 2s forwards;
		animation-delay: 1.5s;
	}
	#who {
		width: 250px;
		height: 230px;
		animation: reveal4others 2s forwards;
		animation-delay: 0s;
		opacity: 0;
	}
	#exp {
		width: 220px;
		height: 230px;
		animation: reveal4others 2s forwards;
		animation-delay: 0.75s;
		opacity: 0;
	}
	#texts {
		margin-top: 50px;
		letter-spacing: -1px;
	}
	.textframe {
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 20px;
		padding: 20px;
	}
	#top {
		margin-top: -96px;
		padding: 100px 30px 30px 30px;
		margin-bottom: 150px;
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
		line-height: 50px;
		text-align: center;
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
