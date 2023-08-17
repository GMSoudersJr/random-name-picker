<script>
  import {
    arrayOfNames,
    currentName,
    stringOfNames
  } from '$lib/stores.js';

  function resetNames() {
    arrayOfNames.set([]);
    currentName.set("");
    stringOfNames.set("");
  }
</script>

<button
  id="reset-names"
  type="button"
  class="button reset"
  name="reset"
  on:click={resetNames}
>
  Clear Names
</button>

<style>
</style>
