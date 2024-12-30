<script>
	import { arrayOfNames } from '$lib/stores.js';
	let names = $derived($arrayOfNames);
</script>

{#each names as name}
	<p>{name}</p>
{/each}

<style>
</style>
