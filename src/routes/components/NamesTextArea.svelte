<script>
  import { STRINGS } from '$lib/strings.js';
  import { appState } from '$lib/state.svelte.js';
</script>

<div
  id="names-input-container"
  class="container"
>
  <label class="label" for="name-list">
    {STRINGS.textarea.label}
  </label>
  <textarea
    id="name-list"
    name="name-list"
    class="input"
    bind:value={appState.stringOfNames}
    placeholder={STRINGS.textarea.placeholder}
    required
  ></textarea>
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
    color: rgba(255, 255, 255, 0.85);
  }
  textarea {
    resize: none;
    padding: 12px 15px;
    text-align: center;
    font-size: 16px;
    height: 100%;
    background: #F1F1F1;
    color: black;
  }
</style>
