<script lang="ts">
	import { STRINGS } from '$lib/strings.js';

	import { Trash2Icon, type Icon as IconType } from 'lucide-svelte';
	import type { Tween } from 'svelte/motion';

	interface Props {
		names: string | undefined;
		progress: Tween<number>;
		randomName: string | undefined;
		randomNamesCalled: string[];
	}

	type ButtonProps = {
		icon: typeof IconType;
		text: string;
	};

	const buttonProps: ButtonProps = {
		text: STRINGS.buttonText.clearNames,
		icon: Trash2Icon
	};

	let {
		names = $bindable(),
		progress = $bindable(),
		randomName = $bindable(),
		randomNamesCalled = $bindable(),
		...props
	}: Props = $props();

	function clearNames() {
		names = undefined;
		progress.target = 0;
		randomName = undefined;
		randomNamesCalled = [];
	}
</script>

<button
	id="clear-names"
	name="clear-names"
	type="button"
	class="button clear-names"
	onclick={clearNames}
	disabled={names?.length === 0}
	{...props}
>
	{#if buttonProps}
		{@const Icon = buttonProps.icon}
		{buttonProps.text}
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
