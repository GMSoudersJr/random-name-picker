<script lang="ts">
	import { STRINGS } from '$lib/strings.js';

	const projectTitle: string = STRINGS.appTitle;
</script>

<div class="outer-container">
	<div class="inner-container">
		<h1>{projectTitle}</h1>
	</div>
</div>

<style>
	.outer-container {
		background: linear-gradient(
			to bottom right,
			var(--colorPurple),
			var(--colorAqua),
			var(--colorPurple)
		);
		padding: 1rem;
		border-radius: 5px;
		padding: 5px;
	}
	.inner-container {
		border-radius: 5px;
		padding: 1rem;
		background-color: var(--colorWhite);
	}
	h1 {
		text-align: center;
		background-color: var(--colorWhite);
		letter-spacing: -1.25px;
		margin: 0;
		color: var(--colorPurple);
	}
</style>
