<script>
	import web from '../../../web.svg';
	import github from '../../../github.svg';
	import twitter from '../../../twitter.svg';
</script>

<div id="socials">
	<a href="https://github.com/shef3r" id="gh" class="social">
		<div class="iconcont"><img src={github} alt="GitHub" class="socialicon" /></div>
		<p>@shef3r</p>
	</a>
	<a href="https://shef3r.dev/" id="web" class="social">
		<div class="iconcont"><img src={web} alt="Website" class="socialicon" /></div>
		<p>shef3r.dev</p>
	</a>
</div>

<style>
	#socials {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 130px;
	}
	a {
		display: flex;
		flex-direction: row;
		justify-content: left;
		gap: 20px;
	}
	.socialicon {
		width: 30px;
	}
	a > p {
		font-size: 14px;
	}
</style>
