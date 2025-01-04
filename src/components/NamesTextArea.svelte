<script lang="ts">
	import { STRINGS } from '$lib/strings.js';
	import { Icon as IconType, ClipboardIcon, PencilIcon } from 'lucide-svelte';

	type FormLabel = {
		text: string;
		leftIcon: typeof IconType;
		rightIcon: typeof IconType;
	};

	const formLabel: FormLabel = {
		text: 'NAMES',
		leftIcon: ClipboardIcon,
		rightIcon: PencilIcon
	};

	let { value = $bindable(), ...props } = $props();
</script>

<div id="names-input-container" class="container">
	<label class="label" for="name-list">
		{#if formLabel}
			{@const LeftIcon = formLabel.leftIcon}
			{@const RightIcon = formLabel.rightIcon}
			<LeftIcon />
			<h2>{formLabel.text}</h2>
			<RightIcon />
		{/if}
	</label>
	<textarea
		id="name-list"
		name="name-list"
		class="input"
		bind:value
		{...props}
		placeholder={STRINGS.textarea.placeholder}
		required
	></textarea>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		border-radius: 10px;
		background: white;
		background: linear-gradient(150deg, var(--colorAqua), var(--colorPurple));
		height: 25vh;
		padding: 15px 20px 20px 20px;
	}
	label {
		display: flex;
		gap: 1rem;
		font-family: var(--fontFamilyEmoji);
		text-align: center;
		align-items: center;
		justify-content: center;
		color: var(--colorWhite);
	}
	textarea {
		resize: none;
		padding: 12px 15px;
		text-align: center;
		font-size: 16px;
		height: 100%;
		background: #f1f1f1;
		color: black;
	}
</style>
