<script>
  import { STRINGS } from '$lib/strings.js';
  import Footer from '$components/Footer.svelte';
  import '../app.css';
</script>
<svelte:head>
  <title>
    {STRINGS.appTitle}
  </title>
</svelte:head>
<slot />
<Footer />
