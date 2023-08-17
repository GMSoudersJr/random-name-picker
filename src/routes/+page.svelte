<script>
  import { arrayOfNames, currentName } from '$lib/stores.js';
  import RandomNameButton from './components/RandomNameButton.svelte';
  import NamesTextArea from './components/NamesTextArea.svelte';
  import SetNamesButton from './components/SetNamesButton.svelte';
  import ClearNamesButton from './components/ClearNamesButton.svelte';
  import ListOfNames from './components/ListOfNames.svelte';
  import CurrentName from './components/CurrentName.svelte';
  import ProjectTitle from './components/ProjectTitle.svelte';

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
