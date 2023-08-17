<script>
  import {
    arrayOfNames,
    stringOfNames,
    currentName
  } from '$lib/stores.js';

  function setArrayOfNames() {
    currentName.set("");
    if ($stringOfNames.length === 0) {
      console.log("no names inserted");
    } else {
      arrayOfNames.set($stringOfNames.split(/[,.\s]/));
    }
  }
</script>
<button
  id="set-names"
  name="set-names"
  type="button"
  class="button set-names"
  on:click={setArrayOfNames}
>
  {$arrayOfNames.length > 0 ? "Reset List" : "Set List"}
</button>
<style>
</style>
