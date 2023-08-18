<script>
  import {
    arrayOfNames,
    currentName,
    stringOfNames,
  } from '$lib/stores.js';
  import ProjectTitle from './components/ProjectTitle.svelte';
  import NamesTextArea from './components/NamesTextArea.svelte';
  import SetNamesButton from './components/SetNamesButton.svelte';
  import ClearNamesButton from './components/ClearNamesButton.svelte';
  import RandomNameButton from './components/RandomNameButton.svelte';
  import CurrentName from './components/CurrentName.svelte';
  import ListOfNames from './components/ListOfNames.svelte';
</script>

<ProjectTitle />
<NamesTextArea />
{#if $stringOfNames.length > 0}
  <SetNamesButton />
  <ClearNamesButton />
{/if}
{#if $arrayOfNames.length > 0}
<CurrentName />
<RandomNameButton />
{/if}
