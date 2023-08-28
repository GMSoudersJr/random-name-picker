<script>
  import { STRINGS } from '$lib/strings.js';
</script>

<footer>
  <p>{STRINGS.copyright}</p>
</footer>

<style>
  footer {
    width: 100%;
    text-align: center;
    padding: 3px;
    color: var(--colorCharcoal);
    justify-self: end;
  }

  footer p {
    font-family: var(--fontFamilyRegular);
    font-size: 16px;
    line-height: 24px;
  }
</style>
