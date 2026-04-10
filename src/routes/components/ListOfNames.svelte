<script>
  import { appState } from '$lib/state.svelte.js';
</script>

{#each appState.arrayOfNames as name (name)}
  <p>{name}</p>
{/each}

<style>
</style>
