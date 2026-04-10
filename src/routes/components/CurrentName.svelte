<script>
  import { appState } from '$lib/state.svelte.js';
</script>

<div class="card">
  {#if !appState.currentName}
    <h4>Pick a Random Name Below</h4>
  {:else}
    <div class="emoji">
      🗣
    </div>
    <h1 class="speaker-name">
      {appState.currentName}
    </h1>
  {/if}
</div>

<style>
  .card {
    height: 15vh;
    width: 80%;
    color: green;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid green;
    align-self: center;
    background: #FFF;
  }
  .emoji {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    font-family: var(--fontFamilyEmoji);
    font-size: var(--fontSizeHeaderMonitor);
    flex: 1
  }
  .speaker-name {
    text-align: center;
    padding-left: 0.5em;
    color: dodgerblue;
    flex: 2;
  }
  h4 {
    text-align: center;
  }
</style>
