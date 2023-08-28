<script>
  import { STRINGS } from '$lib/strings.js';
  import {
    arrayOfNames,
    currentName,
    numberOfNames,
    numberOfNamesDrawn,
    progress,
  } from '$lib/stores.js';

  function chooseRandomName() {
    if ( $arrayOfNames.length === 0 ) {
      currentName.set(null)
    } else {
      let indexOfRandomName = Math.floor(Math.random() * $arrayOfNames.length);
      let randomName = $arrayOfNames.splice(indexOfRandomName, 1);
      currentName.set(randomName);
      arrayOfNames.set($arrayOfNames);
      numberOfNamesDrawn.update(numberOfNames => numberOfNames = numberOfNames + 1);
      progress.set(($numberOfNamesDrawn/$numberOfNames));
    }
  }
</script>

<button
  id="pick-names"
  name="pick-names"
  type="button"
  class="button pick-names"
  on:click={chooseRandomName}
>
    {#if !$currentName}
      <h4>{STRINGS.buttonText.chooseName}</h4>
    {:else}
    <div class="emoji">
      🗣
    </div>
    <h1
      class="speaker-name"
    >
      {$currentName}
    </h1>
    {/if}
</button>

<style>
  .pick-names {
    height: 15vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    background: var(--colorGray);
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
