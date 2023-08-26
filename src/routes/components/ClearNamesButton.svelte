<script>
  import { STRINGS } from '$lib/strings.js';
  import {
    arrayOfNames,
    currentName,
    stringOfNames
  } from '$lib/stores.js';

  function clearNames() {
    arrayOfNames.set([]);
    currentName.set("");
    stringOfNames.set("");
  }
</script>

<button
  id="clear-names"
  name="clear-names"
  type="button"
  class="button clear-names"
  on:click={clearNames}
  disabled={$stringOfNames.length == 0}
>
  {STRINGS.buttonText.clearNames}
</button>

<style>
</style>
