<script lang="ts">
	import { STRINGS } from '$lib/strings.js';

	import {
		arrayOfNames,
		stringOfNames,
		currentName,
		numberOfNamesDrawn,
		numberOfNames,
		progress
	} from '$lib/stores.js';

	import {
		ClipboardListIcon,
		RepeatIcon,
		RefreshCwIcon,
		type Icon as IconType
	} from 'lucide-svelte';

	type ButtonText = {
		text: string;
		icon: typeof IconType;
	};

	function setArrayOfNames() {
		currentName.set('');
		numberOfNamesDrawn.set(0);
		arrayOfNames.set([]);
		let cleanedArrayOfNames = $stringOfNames.split(/[,.\s]/).filter((name) => name.length > 0);
		if ($stringOfNames.length === 0) {
			console.log('no names inserted');
		} else {
			arrayOfNames.set(cleanedArrayOfNames);
			numberOfNames.set(cleanedArrayOfNames.length);
			progress.set(0);
		}
	}
</script>

<button
	id="set-names"
	name="set-names"
	type="button"
	class="button set-names"
	onclick={setArrayOfNames}
	disabled={$stringOfNames.length == 0}
>
	{#if $arrayOfNames.length > 0}
		{@const Icon = RefreshCwIcon}
		{STRINGS.buttonText.refreshList}
		<Icon />
	{:else if $currentName}
		{@const Icon = RepeatIcon}
		{STRINGS.buttonText.reloadList}
		<Icon />
	{:else}
		{@const Icon = ClipboardListIcon}
		{STRINGS.buttonText.setList}
		<Icon />
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
