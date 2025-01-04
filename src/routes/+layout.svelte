<script>
	import { STRINGS } from '$lib/strings.js';
	import Footer from '$components/Footer.svelte';
	import '../app.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<svelte:head>
	<title>
		{STRINGS.appTitle}
	</title>
</svelte:head>
{@render children?.()}
<Footer />
