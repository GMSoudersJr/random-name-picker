<script lang="ts">
  import { STRINGS } from '$lib/strings.js';
  import { appState } from '$lib/state.svelte.js';
</script>

<div id="names-input-container" class="container">
  <label class="label" for="name-list">
    {STRINGS.textarea.label}
  </label>
  {#if appState.originalNames.length > 0}
    <ul class="names-list">
      {#each appState.originalNames as name, i (i)}
        <li class="name-item" class:picked={!appState.arrayOfNames.includes(name)}>
          {name}
        </li>
      {/each}
    </ul>
  {:else}
    <textarea
      id="name-list"
      name="name-list"
      class="input"
      bind:value={appState.stringOfNames}
      placeholder={STRINGS.textarea.placeholder}
      required
    ></textarea>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 10px;
    background: linear-gradient(150deg, var(--colorAqua), var(--colorPurple));
    height: clamp(120px, 28vh, 240px);
    padding: 15px 20px 20px 20px;
  }
  label {
    font-family: var(--fontFamilyRegular);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    color: var(--theme-label-color);
  }
  textarea {
    resize: none;
    padding: 12px 15px;
    text-align: center;
    font-size: 16px;
    height: 100%;
    background: var(--theme-textarea-bg);
    color: var(--theme-textarea-color);
  }
  .names-list {
    list-style: none;
    overflow-y: auto;
    height: 100%;
    background: var(--theme-textarea-bg);
    border-radius: 3px;
    padding: 12px 15px;
    display: flex;
    flex-direction: column;
    gap: 0.15em;
  }
  .name-item {
    text-align: center;
    font-size: 16px;
    font-family: var(--fontFamilyRegular);
    color: var(--theme-textarea-color);
    transition: opacity 0.4s ease, text-decoration-color 0.4s ease;
  }
  .name-item.picked {
    text-decoration: line-through;
    opacity: 0.4;
  }
</style>
