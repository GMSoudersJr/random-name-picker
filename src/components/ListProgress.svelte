<script>
	import { progress } from '$lib/stores.js';
</script>

<progress id="list-progress" title="Progress Through List" value={$progress}>
	{$progress}
</progress>

<style>
	progress {
		width: 100%;
	}
</style>
