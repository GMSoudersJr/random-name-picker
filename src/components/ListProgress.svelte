<script lang="ts">
	import type { Tween } from 'svelte/motion';

	interface ProgressProps {
		progress: Tween<number>;
	}

	let { progress }: ProgressProps = $props();
</script>

<progress id="list-progress" title="Progress Through List" value={progress.current}></progress>

<style>
	progress {
		width: 100%;
	}
</style>
