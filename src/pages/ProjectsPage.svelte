<script>
    // if needed

	import Paper from "../components/projects/Paper.svelte";

</script>
<section id="projects" class="flex margin-40 flex-col justify-items-center items-center">
    <div id="header"><p>projects</p></div>
    <div id="projectcards">
        <div class="projectcard">
            <Paper/>
        </div>
    </div>
</section>
<style>
    #projectcards {
        margin: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
    }
    .projectcard {
		width: 300px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 30px;
		padding: 30px;
		height: 400px;
		margin: 10px;
		margin-top: 40px;
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