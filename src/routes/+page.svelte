<script>
  import { arrayOfNames, currentName } from '$lib/stores.js';
  import RandomNameButton from './components/RandomNameButton.svelte';
  import NamesTextArea from './components/NamesTextArea.svelte';
  import SetNamesButton from './components/SetNamesButton.svelte';
  import ClearNamesButton from './components/ClearNamesButton.svelte';
  import ListOfNames from './components/ListOfNames.svelte';


</script>

<NamesTextArea />
<SetNamesButton />
<ClearNamesButton />
<RandomNameButton />
<h1>
  {$currentName}
</h1>
<ListOfNames />

<style>
</style>
