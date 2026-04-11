<script lang="ts">
  import { onMount } from 'svelte';
  import { themeStore } from '$lib/theme.svelte.js';

  onMount(() => {
    themeStore.init();
  });
</script>

<button
  type="button"
  class="theme-toggle"
  onclick={themeStore.toggle}
  aria-label="Toggle theme"
>
  {themeStore.current === 'dark' ? '🌙' : '☀️'}
</button>

<style>
  .theme-toggle {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    padding: 0.25rem;
    width: auto;
    height: auto;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    color: inherit;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--fontFamilyEmoji);
  }

  .theme-toggle:hover {
    filter: brightness(120%);
  }
</style>
