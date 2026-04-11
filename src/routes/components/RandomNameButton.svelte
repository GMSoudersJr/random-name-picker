<script lang="ts">
  import confetti from 'canvas-confetti';
  import { STRINGS } from '$lib/strings.js';
  import { appState } from '$lib/state.svelte.js';
  import { themeStore } from '$lib/theme.svelte.js';

  function fireConfetti() {
    const colors = themeStore.current === 'dark'
      ? ['#5680E9', '#5AB9EA', '#8860D0', '#C1C8E4', '#84CEEB']
      : ['#818cf8', '#38bdf8', '#a78bfa', '#86efac', '#fde68a'];
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors,
    });
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 120,
        origin: { y: 0.5 },
        colors,
        scalar: 0.8,
      });
    }, 150);
  }

  let nameEl = $state<HTMLHeadingElement | null>(null);

  $effect(() => {
    const _ = appState.currentName;
    if (nameEl) {
      nameEl.classList.remove('roll-in');
      void nameEl.offsetWidth;
      nameEl.classList.add('roll-in');
    }
  });

  function chooseRandomName() {
    if (appState.arrayOfNames.length === 0) {
      appState.currentName = '';
      appState.progress.target = 0;
    } else {
      const index = Math.floor(Math.random() * appState.arrayOfNames.length);
      const [randomName] = appState.arrayOfNames.splice(index, 1);
      appState.currentName = randomName;
      appState.numberOfNamesDrawn += 1;
      if (appState.numberOfNames !== null) {
        appState.progress.target = appState.numberOfNamesDrawn / appState.numberOfNames;
      }
      fireConfetti();
    }
  }
</script>

<div class="pick-row">
  <button
    id="pick-names"
    name="pick-names"
    type="button"
    class="button pick-button"
    class:has-names={appState.arrayOfNames.length > 0}
    onclick={chooseRandomName}
  >
    <span class="emoji">🗣</span>
  </button>

  <div class="name-display">
    {#if appState.currentName}
      <h1 class="speaker-name" bind:this={nameEl}>
        {appState.currentName}
      </h1>
    {:else}
      <span class="placeholder">· · ·</span>
    {/if}
  </div>
</div>

<style>
  .pick-row {
    display: flex;
    align-items: center;
    gap: 1em;
    width: 100%;
  }
  .pick-button {
    font-family: var(--fontFamilyEmoji);
    font-size: 2.5rem;
    background: var(--colorBlue);
    color: var(--colorWhite);
    border-radius: 50%;
    padding: 0;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    position: relative;
    box-shadow: 0 4px 15px var(--theme-pick-btn-shadow);
  }
  .pick-button::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 3px solid var(--colorBlue);
    opacity: 0;
    pointer-events: none;
  }
  .pick-button.has-names::after {
    animation: pulse-ring 1.8s ease-out infinite;
  }
  @keyframes pulse-ring {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  .name-display {
    flex: 1;
    overflow: hidden;
    padding: 0.75em 1.5em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--theme-surface);
    border-radius: 12px;
    border: 1px solid var(--theme-surface-border);
    box-shadow: 0 0 24px var(--theme-surface-shadow);
    height: 100px;
  }
  .placeholder {
    color: var(--theme-placeholder);
    font-size: 2rem;
    letter-spacing: 0.3em;
  }
  .speaker-name {
    color: var(--theme-name-color);
    margin: 0;
    font-size: clamp(2rem, 6vw, 5rem);
    line-height: 1.1;
    word-break: break-word;
    text-shadow: 0 2px 10px var(--theme-name-shadow);
  }

  @keyframes rollIn {
    from {
      transform: translateY(60px) rotateX(90deg);
      opacity: 0;
    }
    to {
      transform: translateY(0) rotateX(0deg);
      opacity: 1;
    }
  }

  .speaker-name:global(.roll-in) {
    animation: rollIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
</style>
