<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import ProjectTitle from '$components/ProjectTitle.svelte';
	import NamesTextArea from '$components/NamesTextArea.svelte';
	import SetNamesButton from '$components/SetNamesButton.svelte';
	import ClearNamesButton from '$components/ClearNamesButton.svelte';
	import RandomNameButton from '$components/RandomNameButton.svelte';
	import ExhaustedList from '$components/ExhaustedList.svelte';
	import ListProgress from '$components/ListProgress.svelte';

	let initialNamesValue: string | undefined;

	let names = $state(initialNamesValue);

	let randomNamesCalled: string[] = $state([]);
	let showSetAndClearButtons = $derived(
		names && names.split(/\s+|,|\r\n/).filter((name) => name.length > 0).length > 1
	);
	let setListOfNames: string[] | undefined = $state(undefined);

	let randomName: string | undefined = $state(undefined);

	let progress = $state(
		new Tween(0, {
			duration: 400,
			easing: cubicInOut
		})
	);
</script>

<div class="page-container">
	<ProjectTitle />
	<NamesTextArea bind:value={names} />
	{#if showSetAndClearButtons}
		<SetNamesButton
			bind:names
			bind:setListOfNames
			bind:randomName
			bind:randomNamesCalled
			bind:progress
		/>
		<ClearNamesButton bind:names bind:progress bind:randomName bind:randomNamesCalled />
		{#if (setListOfNames && setListOfNames.length > 0) || randomName}
			<ListProgress {progress}/>
			<RandomNameButton
				bind:randomName
				bind:progress
				bind:randomNamesCalled
				listOfNames={setListOfNames}
			/>
			{#if setListOfNames?.length === 0}
				<ExhaustedList />
			{/if}
		{/if}
	{/if}
</div>

<style>
	.page-container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
