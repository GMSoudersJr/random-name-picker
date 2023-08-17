<script>
  import { arrayOfNames } from '$lib/stores.js';
  $: names = $arrayOfNames;

</script>

{#each names as name}
  <p>{name}</p>
{/each}

<style>
</style>
