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
    border-top: 0.5px dotted var(--colorCharcoal);
    padding: 3px;
    color: var(--colorWhite);
    justify-self: end;
  }

  footer p {
    font-family: var(--fontFamilyRegular);
    font-size: 16px;
    line-height: 24px;
  }
</style>
