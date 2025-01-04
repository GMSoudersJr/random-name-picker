<script lang="ts">
	import { STRINGS } from '$lib/strings.js';

	import { ShuffleIcon, UserIcon, type Icon as IconType } from 'lucide-svelte';
	import type { Tween } from 'svelte/motion';

	interface RandomNameButtonProps {
		listOfNames: string[] | undefined;
		randomName: string | undefined;
		progress: Tween<number>;
		randomNamesCalled: string[];
	}

	let {
		randomName = $bindable(),
		progress = $bindable(),
		randomNamesCalled = $bindable(),
		listOfNames
	}: RandomNameButtonProps = $props();

	function chooseRandomName() {
		if (listOfNames?.length === 0) {
			randomName = undefined;
			progress.target = 0;
		} else {
			if (listOfNames) {
				let indexOfRandomName = Math.floor(Math.random() * listOfNames.length);
				randomName = listOfNames?.splice(indexOfRandomName, 1)[0];
				randomNamesCalled.push(randomName);
				progress.target =
					randomNamesCalled.length / (randomNamesCalled.length + listOfNames.length);
			}
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
	{#if !randomName}
		{@const Icon = ShuffleIcon}
		{STRINGS.buttonText.chooseName}
		<Icon />
	{:else}
		{@const Icon = UserIcon}
		{randomName}
		<Icon strokeWidth={3} />
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
