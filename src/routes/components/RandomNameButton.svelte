<script>
  import { arrayOfNames, currentName } from '$lib/stores.js';

  function chooseRandomName() {
    if ( $arrayOfNames.length === 0 ) {
      return "No more names";
    } else {
      let indexOfRandomName = Math.floor(Math.random() * $arrayOfNames.length);
      let randomName = $arrayOfNames.splice(indexOfRandomName, 1);
      console.log($arrayOfNames);
      console.log(randomName[0]);
      console.log(indexOfRandomName);
      currentName.set(randomName);
      arrayOfNames.set($arrayOfNames);
    }
  }
</script>

<button
  type="button"
  class="button"
  on:click={chooseRandomName}
>
  Pick a Name
</button>

<style>
</style>
