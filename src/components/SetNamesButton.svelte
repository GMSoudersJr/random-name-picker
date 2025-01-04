<script lang="ts">
	import { STRINGS } from '$lib/strings.js';

	import {
		ClipboardListIcon,
		RepeatIcon,
		RefreshCwIcon,
		type Icon as IconType
	} from 'lucide-svelte';
	import type {Tween} from 'svelte/motion';

	type ButtonText = {
		text: string;
		icon: typeof IconType;
	};

	const setListButtonText: ButtonText = {
		text: STRINGS.buttonText.setList,
		icon: ClipboardListIcon
	};

	const refreshListButtonText: ButtonText = {
		text: STRINGS.buttonText.refreshList,
		icon: RefreshCwIcon
	};

	const repeatListButtonText: ButtonText = {
		text: STRINGS.buttonText.reloadList,
		icon: RepeatIcon
	};

	function setArrayOfNames() {
		setListOfNames = undefined;
		setListOfNames = names && names.split(/\s+|,|\r\n/).filter((name) => name.length > 0);
		randomName = undefined;
		randomNamesCalled = [];
		progress.target = 0;
	}

	interface Props {
		names: string | undefined;
		randomName: string | undefined;
		setListOfNames: string | string[] | undefined;
		randomNamesCalled: string[];
		progress: Tween<number>;
	}

	let {
		names = $bindable(),
		setListOfNames = $bindable(),
		randomName = $bindable(),
		randomNamesCalled = $bindable(),
		progress = $bindable(),
	}: Props = $props();

</script>

<button
	id="set-names"
	name="set-names"
	type="button"
	class="button set-names"
	onclick={setArrayOfNames}
>
	{#if setListOfNames && setListOfNames.length > 0}
		{@const Icon = refreshListButtonText.icon}
		{refreshListButtonText.text}
		<Icon />
	{:else if randomName}
		{@const Icon = repeatListButtonText.icon}
		{repeatListButtonText.text}
		<Icon />
	{:else}
		{@const Icon = setListButtonText.icon}
		{setListButtonText.text}
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
