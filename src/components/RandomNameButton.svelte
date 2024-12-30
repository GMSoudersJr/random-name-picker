<script lang="ts">
	import { STRINGS } from '$lib/strings.js';
	import {
		arrayOfNames,
		currentName,
		numberOfNames,
		numberOfNamesDrawn,
		progress
	} from '$lib/stores.js';

	import {
		ShuffleIcon,
		UserIcon,
		type Icon as IconType
	} from 'lucide-svelte';

	function chooseRandomName() {
		if ($arrayOfNames.length === 0) {
			currentName.set('');
			progress.set(0);
		} else {
			let indexOfRandomName = Math.floor(Math.random() * $arrayOfNames.length);
			let randomName = $arrayOfNames.splice(indexOfRandomName, 1);
			currentName.set(randomName);
			arrayOfNames.set($arrayOfNames);
			numberOfNamesDrawn.update((numberOfNames) => (numberOfNames = numberOfNames + 1));
			progress.set($numberOfNamesDrawn / $numberOfNames);
		}
	}
</script>

<button
	id="pick-names"
	name="pick-names"
	type="button"
	class="button pick-names"
	onclick={chooseRandomName}
>
	{#if !$currentName}
		{@const Icon = ShuffleIcon}
		{STRINGS.buttonText.chooseName} <Icon />
	{:else}
		{@const Icon = UserIcon}
		{$currentName} <Icon strokeWidth={3}/>
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		font-size: 1.5rem;
	}
</style>
