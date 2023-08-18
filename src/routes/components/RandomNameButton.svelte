<script>
  import { arrayOfNames, currentName } from '$lib/stores.js';

  function chooseRandomName() {
    if ( $arrayOfNames.length === 0 ) {
      console.log("no more names");
      currentName.set("No more names.  Reset the list.")
    } else {
      let indexOfRandomName = Math.floor(Math.random() * $arrayOfNames.length);
      let randomName = $arrayOfNames.splice(indexOfRandomName, 1);
      currentName.set(randomName);
      arrayOfNames.set($arrayOfNames);
    }
  }

  $: buttonText = $arrayOfNames.length > 0 ? "Pick a Name 🎫" : "Click Set List";
</script>

<button
  id="pick-names"
  name="pick-names"
  type="button"
  class="button pick-names"
  on:click={chooseRandomName}
  disabled={$arrayOfNames.length == 0}
>
  {buttonText}
</button>

<style>
</style>
