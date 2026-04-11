<script>
  import { STRINGS } from '$lib/strings.js';
  import { appState } from '$lib/state.svelte.js';

  function clearNames() {
    appState.arrayOfNames = [];
    appState.originalNames = [];
    appState.currentName = '';
    appState.stringOfNames = '';
    appState.numberOfNamesDrawn = 0;
    appState.progress.target = 0;
  }
</script>

<button
  id="clear-names"
  name="clear-names"
  type="button"
  class="button clear-names"
  onclick={clearNames}
  disabled={appState.stringOfNames.length === 0}
>
  {STRINGS.buttonText.clearNames}
</button>

<style>
  .clear-names {
    background: #c0392b;
    color: var(--colorWhite);
  }
  .clear-names:hover {
    filter: brightness(115%);
  }
</style>
