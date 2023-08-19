<script>
  import {
    arrayOfNames,
    stringOfNames,
    currentName
  } from '$lib/stores.js';

  function setArrayOfNames() {
    currentName.set("");
    let cleanedArrayOfNames =
      $stringOfNames.split(/[,.\s]/).filter(name => name.length > 0);
    if ($stringOfNames.length === 0) {
      console.log("no names inserted");
    } else {
      arrayOfNames.set(cleanedArrayOfNames);
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
    Reset List 🔄
  {:else if $currentName}
    Reload the list
  {:else}
    Set List 📋
  {/if}
</button>
