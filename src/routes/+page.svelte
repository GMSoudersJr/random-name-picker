<script>
  import {
    arrayOfNames,
    currentName,
    stringOfNames,
  } from '$lib/stores.js';
  import ProjectTitle from '$components/ProjectTitle.svelte';
  import NamesTextArea from '$components/NamesTextArea.svelte';
  import SetNamesButton from '$components/SetNamesButton.svelte';
  import ClearNamesButton from '$components/ClearNamesButton.svelte';
  import RandomNameButton from '$components/RandomNameButton.svelte';
  import CurrentName from '$components/CurrentName.svelte';
  import ListOfNames from '$components/ListOfNames.svelte';
  import ExhaustedList from '$components/ExhaustedList.svelte';
  import ListProgress from '$components/ListProgress.svelte';
</script>

<div class="page-container">
  <ProjectTitle />
  <NamesTextArea />
  {#if $stringOfNames.length > 0}
    <SetNamesButton />
    <ClearNamesButton />
    {#if $arrayOfNames.length > 0 || $currentName}
      <ListProgress />
      <RandomNameButton />
      {#if $arrayOfNames.length == 0}
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
