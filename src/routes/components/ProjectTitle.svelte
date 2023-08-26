<script>
  import { STRINGS } from '$lib/strings.js';
</script>
<div class="outer-container">
  <div class="inner-container">
    <h1>{STRINGS.appTitle}</h1>
  </div>
</div>
<style>
  .outer-container {
    background: linear-gradient(to bottom right, var(--colorPurple),
    var(--colorAqua), var(--colorPurple));
    padding: 1rem;
    border-radius: 5px;
    padding: 5px;
  }
  .inner-container {
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--colorWhite);
  }
  h1 {
    text-align: center;
    background-color: var(--colorWhite);
    letter-spacing: -1.5px;
    margin: 0;
    color: var(--colorPurple);
  }
</style>
