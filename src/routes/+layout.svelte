<script>
  import { STRINGS } from '$lib/strings.js';
  import '../app.css';
</script>
<svelte:head>
  <title>
    {STRINGS.appTitle}
  </title>
</svelte:head>
<slot />
