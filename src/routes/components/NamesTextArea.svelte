<script>
  import { arrayOfNames, stringOfNames } from '$lib/stores.js';
</script>

<div
  id="names-input-container"
  class="container"
>
  <label class="label" for="name-list">
    Names:
  </label>
  <textarea 
    id="name-list"
    name="name-list"
    class="input"
    bind:value={$stringOfNames}
    placeholder="Separate names with a space, comma, period, or enter."
    cols=60
    rows=7
    required
  ></textarea>
</div>

<style>
  textarea {
    resize: none;
    padding: 12px 15px;
  }
</style>
