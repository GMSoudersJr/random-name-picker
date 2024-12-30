<script lang="ts">
	import { STRINGS } from '$lib/strings.js';
	import {
		arrayOfNames,
		currentName,
		stringOfNames,
		numberOfNamesDrawn,
		progress
	} from '$lib/stores.js';

	import {
		Trash2Icon,
		type Icon as IconType
	} from 'lucide-svelte';

	function clearNames() {
		arrayOfNames.set([]);
		currentName.set('');
		stringOfNames.set('');
		numberOfNamesDrawn.set(0);
		progress.set(0);
	}
</script>

<button
	id="clear-names"
	name="clear-names"
	type="button"
	class="button clear-names"
	onclick={clearNames}
	disabled={$stringOfNames.length == 0}
>
	{#if STRINGS.buttonText.clearNames}
		{@const Icon = Trash2Icon}
		{STRINGS.buttonText.clearNames} <Icon />
	{/if}
</button>

<style>
	button {
		display: flex;
		gap: 1rem;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
</style>
