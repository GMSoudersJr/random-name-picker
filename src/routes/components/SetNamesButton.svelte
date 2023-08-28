<script>
  import { STRINGS } from '$lib/strings.js';
  import {
    arrayOfNames,
    stringOfNames,
    currentName,
    numberOfNamesDrawn,
    numberOfNames,
    progress,
  } from '$lib/stores.js';

  function setArrayOfNames() {
    currentName.set("");
    numberOfNamesDrawn.set(0);
    arrayOfNames.set([]);
    let cleanedArrayOfNames =
      $stringOfNames.split(/[,.\s]/).filter(name => name.length > 0);
    if ($stringOfNames.length === 0) {
      console.log("no names inserted");
    } else {
      arrayOfNames.set(cleanedArrayOfNames);
      numberOfNames.set(cleanedArrayOfNames.length);
      progress.set(0);
    }
  }
</script>

<button
  id="set-names"
  name="set-names"
  type="button"
  class="button set-names"
  on:click={setArrayOfNames}
  disabled={$stringOfNames.length == 0}
>
  {#if $arrayOfNames.length > 0}
    {STRINGS.buttonText.resetList}
  {:else if $currentName}
    {STRINGS.buttonText.reloadList}
  {:else}
    {STRINGS.buttonText.setList}
  {/if}
</button>
