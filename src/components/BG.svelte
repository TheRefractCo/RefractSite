<div id="cont">
	<table id="anim">
		<tr>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
		</tr>
		<tr>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
		</tr>
		<tr>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
			<td><div></div></td>
		</tr>
	</table>
</div>

<style>
	#cont {
		display: flex;
		justify-content: center;
	}
	#anim > tr > td {
		height: 80px;
		width: 50px !important;
		border: solid 1px;
		border-color: transparent;
	}
	td > div {
		background-color: black;
		height: 100%;
		width: 100%;
	}
	#anim {
		opacity: 0.8;
		animation: reveal 2s forwards;
		position: absolute;
		z-index: -999;
		top: 0;
		overflow: hidden;
		width: 2500px;
		border: 20px black solid;
		background-image: linear-gradient(
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0.2),
			transparent
		);
		margin: -70px;
	}
	@keyframes reveal {
		0% {
			opacity: 0%;
			filter: blur(20px);
		}
		100% {
			opacity: 80%;
			filter: blur(2px);
		}
	}
</style>
