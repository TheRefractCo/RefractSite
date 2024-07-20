<script>
	import logo from "../../src/logo.svg";
	import TopPage from "../components/TopPage.svelte";
</script>

<style>
	.logo, a { transition: all .5s; }
	.logo:hover {
		width: 25rem;
	}
	a:hover {
		scale: 1.1;
	}
	#ttb {
		background: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.7), transparent);
	}
</style>

<div id="ttb" class="items-center flex margin-20 justify-center flex-row w-full h-24 sticky top-0 gap-10">
	<a type="button" class="btn !bg-transparent" href="#projs">projects</a>
	<a href="#top"><img src="{logo}" class="w-80 logo" alt="REFRACT Logo"></a>
	<a type="button" class="btn !bg-transparent" href="#members">members</a>
</div>

<TopPage/>