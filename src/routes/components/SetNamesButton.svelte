<script>
  import { STRINGS } from '$lib/strings.js';
  import { appState } from '$lib/state.svelte.js';

  function setArrayOfNames() {
    appState.currentName = '';
    appState.numberOfNamesDrawn = 0;
    appState.arrayOfNames = [];
    const cleanedArrayOfNames =
      appState.stringOfNames.split(/[,.\s]/).filter(name => name.length > 0);
    if (appState.stringOfNames.length === 0) {
      console.log("no names inserted");
    } else {
      appState.arrayOfNames = cleanedArrayOfNames;
      appState.originalNames = [...cleanedArrayOfNames];
      appState.numberOfNames = cleanedArrayOfNames.length;
      appState.progress.target = 0;
    }
  }
</script>

<button
  id="set-names"
  name="set-names"
  type="button"
  class="button set-names"
  onclick={setArrayOfNames}
  disabled={appState.stringOfNames.length === 0}
>
  {#if appState.arrayOfNames.length > 0}
    {STRINGS.buttonText.resetList}
  {:else if appState.currentName}
    {STRINGS.buttonText.reloadList}
  {:else}
    {STRINGS.buttonText.setList}
  {/if}
</button>
