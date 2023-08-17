<script>
  import { arrayOfNames, currentName } from '$lib/stores.js';
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
<SetNamesButton />
<ClearNamesButton />
<RandomNameButton />
<CurrentName />
<ListOfNames />

<style>
</style>
