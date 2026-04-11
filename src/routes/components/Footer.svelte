<script lang="ts">
  import { STRINGS } from '$lib/strings.js';
  import Socials from './Socials.svelte';
</script>

<footer>
  <Socials />
  <p>{STRINGS.copyright}</p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    padding: 1em;
  }

  p {
    margin: 0;
    font-size: 0.85rem;
    font-family: var(--fontFamilyRegular);
    color: var(--theme-text-primary);
  }
</style>
