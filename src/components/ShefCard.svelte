<script>
	import shfrlogo from '../shfrlogo.svg';
	import ShefContact from './shef/shefContact.svelte';
	import ShefMusic from './shef/shefMusic.svelte';
	import ShefProjs from './shef/shefProjs.svelte';
</script>

<div class="flex justify-center flex-row gap-8 items-center">
	<img src={shfrlogo} alt="shefer" width="30%" />
	<div class="flex flex-col items-center">
		<p>16yo ◾ he/him</p>
		<ShefMusic/>
	</div>
</div>
<br />
<p>Check out my apps at the links below!</p>
<br />
<ShefProjs />
<p id="contactme">You can<br />contact me here:</p>
<ShefContact />

<style>
	#contactme {
		margin-top: -20px;
	}
</style>
