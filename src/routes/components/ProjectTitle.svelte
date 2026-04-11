<script lang="ts">
  import { STRINGS } from '$lib/strings.js';
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<header>
  <h1>{STRINGS.appTitle}</h1>
  <ThemeToggle />
</header>

<style>
  header {
    background: linear-gradient(135deg, var(--colorPurple), var(--colorBlue));
    padding: 1.25rem 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  header::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
    background-size: 18px 18px;
    pointer-events: none;
  }
  h1 {
    position: relative;
    color: var(--colorWhite);
    letter-spacing: -1px;
    margin: 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
</style>
