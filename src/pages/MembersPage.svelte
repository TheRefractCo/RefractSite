<script>
	import AurumakerCard from '../components/cards/AurumakerCard.svelte';
	import HeftyMouseCard from '../components/cards/HeftyMouseCard.svelte';
	import KibSquibCard from '../components/cards/KibSquibCard.svelte';
	import PdawgCard from '../components/cards/PdawgCard.svelte';
	import PeridotCard from '../components/cards/PeridotCard.svelte';
	import ShefCard from '../components/cards/ShefCard.svelte';
</script>

<section id="members" class="flex margin-40 flex-col justify-items-center items-center">
	<div id="header"><p>Our members</p></div>
	<div id="membercards">
		<div class="foundercard">
			<ShefCard />
		</div>
		<div class="foundercard">
			<PeridotCard />
		</div>
		<div class="membercard">
			<AurumakerCard />
		</div>
		<div class="membercard">
			<HeftyMouseCard />
		</div>
		<div class="membercard">
			<KibSquibCard />
		</div>
		<div class="membercard">
			<PdawgCard />
		</div>
	</div>
</section>

<style>
	@media screen and (max-width: 750px) {
		#membercards {
			flex-direction: column !important;
		}
		.membercard:last-child {
			margin-bottom: 250px !important;
		}
	}
	#members {
		padding-top: 50px;
	}
	.membercard {
		width: 30%;
		width: 300px;
		border: 1px dashed rgba(255, 255, 255, 0.3);
		border-radius: 30px;
		padding: 30px;
		height: 400px;
		margin: 10px;
		margin-top: 40px;
	}
	.foundercard {
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
		flex-wrap: wrap;
		justify-content: center;
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
</style>
