<script>
	import ShefCard from '../components/ShefCard.svelte';
</script>

<section id="members" class="flex margin-40 flex-col justify-items-center items-center">
	<div id="header"><p>Our members</p></div>
	<div id="membercards">
		<div class="membercard">
			<ShefCard />
		</div>
		<div class="membercard">
			<div class="smalltxt">p3rid0t didn't make their member card yet.</div>
		</div>
	</div>
</section>

<style>
	@media screen and (max-width: 750px) {
		#membercards {
			flex-direction: column !important;
		}
		.membercard:nth-child(2) {
			margin-bottom: 250px !important;
		}
	}
	#members {
		padding-top: 50px;
	}
	.membercard {
		width: 30%;
		width: 300px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 30px;
		padding: 30px;
		height: 400px;
		margin: 10px;
		margin-top: 40px;
	}
	#membercards {
		margin: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	#members {
		height: 700px;
	}
	#header > p {
		font-size: 35px;
	}
	p {
		transition: all 0.5s;
	}
	#header {
		display: flex;
		font-family: var(--theme-font-family-heading);
	}
	.smalltxt {
		letter-spacing: -1px;
		margin-bottom: 20px;
		font-weight: 100;
		font-size: 18px;
	}
</style>
