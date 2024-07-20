<section id="members" class="flex margin-40 flex-col justify-items-center items-center">
	<div id="header"><p>Our members</p></div>
	<div id="membercards">
		<div class="membercard">
			<div class="smalltxt">
				shef3r didn't make their member card yet :( (btw to-do make this shit work on mobile)
			</div>
		</div>
		<div class="membercard">
			<div class="smalltxt">p3rid0t didn't make their member card yet :(</div>
		</div>
	</div>
</section>

<style>
	.membercard {
		width: 40%;
		border: 1px solid white;
		border-radius: 30px;
		padding: 30px;
		height: 550px;
		margin: 10px;
		margin-top: 40px;
	}
	#membercards {
		margin: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
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
