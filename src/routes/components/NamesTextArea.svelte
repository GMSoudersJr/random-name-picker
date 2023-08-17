<script>
  import { arrayOfNames, stringOfNames } from '$lib/stores.js';
  let labelText = "📝 Names ⬇"
</script>

<div
  id="names-input-container"
  class="container"
>
  <label class="label" for="name-list">
    {labelText}
  </label>
  <textarea 
    id="name-list"
    name="name-list"
    class="input"
    bind:value={$stringOfNames}
    placeholder="Separate names with a space, comma, period, or enter."
    rows=10
    required
  ></textarea>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  label {
    font-size: 24px;
    font-family: var(--fontFamilyEmoji);
    text-align: center;
    align-items: center;
  }
  textarea {
    resize: none;
    padding: 12px 15px;
    text-align: center;
    font-size: 20px;
  }
</style>
