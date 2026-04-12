<script>
  import { slide } from 'svelte/transition';
  import { appState } from '$lib/state.svelte.js';
  import ProjectTitle from './components/ProjectTitle.svelte';
  import NamesTextArea from './components/NamesTextArea.svelte';
  import SetNamesButton from './components/SetNamesButton.svelte';
  import ClearNamesButton from './components/ClearNamesButton.svelte';
  import RandomNameButton from './components/RandomNameButton.svelte';
  import ExhaustedList from './components/ExhaustedList.svelte';
  import ListProgress from './components/ListProgress.svelte';
</script>

<ProjectTitle />
<div class="page-container">
  <NamesTextArea />
  {#if appState.stringOfNames.length > 0}
    <div class="actions" transition:slide={{ duration: 250 }}>
      <SetNamesButton />
      <ClearNamesButton />
    </div>
    {#if appState.arrayOfNames.length > 0 || appState.currentName}
      <div class="pick-area" transition:slide={{ duration: 250 }}>
        <ListProgress />
        <RandomNameButton />
        {#if appState.arrayOfNames.length === 0}
          <ExhaustedList />
        {/if}
      </div>
    {/if}
  {/if}
</div>

<style>
  .page-container {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: clamp(0.4em, 1.5vh, 1em);
    padding: clamp(0.5em, 2vw, 1em);
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }
  .actions {
    display: flex;
    flex-direction: row;
    gap: 0.75em;
  }
  .actions :global(button) {
    flex: 1;
    width: auto;
  }
  .pick-area {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
