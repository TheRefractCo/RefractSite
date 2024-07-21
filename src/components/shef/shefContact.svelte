<script>
	import email from '../../email.svg';
	import github from '../../github.svg';
	import twitter from '../../twitter.svg';
</script>

<div id="socials">
	<a href="https://github.com/shef3r" id="gh" class="social">
		<div class="iconcont"><img src={github} alt="GitHub" class="socialicon" /></div>
		<p>@shef3r</p>
	</a><a href="https://twitter.com/lidlomiks" id="twt" class="social">
		<div class="iconcont"><img src={twitter} alt="Twitter" class="socialicon" /></div>
		<p>@lidlomiks</p>
	</a><a href="mailto:bruno@refract.fyi" id="mail" class="social">
		<div class="iconcont"><img src={email} alt="E-mail" class="socialicon" /></div>
		<p>bruno@refract.fyi</p>
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
