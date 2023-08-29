<script>
  import { STRINGS } from '$lib/strings.js';
  import { stringOfNames } from '$lib/stores.js';
  let labelText = "📝 Names ⬇"
</script>

<div
  id="names-input-container"
  class="container"
>
  <label class="label" for="name-list">
    {STRINGS.textarea.label}
    <textarea 
      id="name-list"
      name="name-list"
      class="input"
      bind:value={$stringOfNames}
      placeholder={STRINGS.textarea.placeholder}
      required
    ></textarea>
  </label>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 10px;
    background: white;
    background: linear-gradient(150deg, var(--colorAqua), var(--colorPurple));
    height: 25vh;
    padding: 15px 20px 20px 20px;
  }
  label {
    font-family: var(--fontFamilyEmoji);
    text-align: center;
    align-items: center;
    color: var(--colorWhite );
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
