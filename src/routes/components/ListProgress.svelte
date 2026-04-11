<script>
  import { appState } from '$lib/state.svelte.js';
</script>

<div class="progress-wrapper">
  <span class="progress-label">
    {appState.numberOfNamesDrawn} of {appState.numberOfNames} picked
  </span>
  <progress
    id="list-progress"
    title="Progress Through List"
    value={appState.progress.current}
  ></progress>
</div>

<style>
  .progress-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.4em;
  }
  .progress-label {
    font-family: var(--fontFamilyRegular);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--theme-text-muted);
    text-align: right;
  }
  progress {
    width: 100%;
    height: 10px;
    border: none;
    border-radius: 5px;
    background: var(--theme-progress-track);
    appearance: none;
  }
  progress::-webkit-progress-bar {
    background: var(--theme-progress-track);
    border-radius: 5px;
  }
  progress::-webkit-progress-value {
    background: var(--colorAqua);
    border-radius: 5px;
    transition: width 0.4s ease;
  }
  progress::-moz-progress-bar {
    background: var(--colorAqua);
    border-radius: 5px;
  }
</style>
