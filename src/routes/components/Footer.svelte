<script>
  import { STRINGS } from '$lib/strings.js';
  import Socials from './Socials.svelte';
</script>

<footer>
  <Socials />
  <p>{STRINGS.copyright}</p>
</footer>

<style>
  footer {
    width: 100%;
    text-align: center;
    padding: 3px;
    color: var(--colorCharcoal);
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer p {
    font-family: var(--fontFamilyRegular);
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 64em) {
    footer {
      color: var(--colorWhite);
    }
  }
</style>
