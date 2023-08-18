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
    placeholder="ENTER NAMES HERE!"
    required
  ></textarea>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 10px;
    background: white;
    background: linear-gradient(150deg, pink, orange);
    height: 25vh;
    padding: 15px 20px 20px 20px;
  }
  label {
    font-family: var(--fontFamilyEmoji);
    text-align: center;
    align-items: center;
    color: dodgerblue;
  }
  textarea {
    resize: none;
    padding: 12px 15px;
    text-align: center;
    font-size: 16px;
    height: 100%;
    background: #F1F1F1;
    color: dodgerblue;
  }
</style>
