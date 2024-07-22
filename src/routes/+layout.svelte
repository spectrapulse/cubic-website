<script>
  import '../app.css';
  import { page } from '$app/stores';
  import { NavbarBlock, FooterBlock } from '$lib';

  $: title = [
    'CubicMC',
    ...$page.url.pathname
      .split('/')
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)),
  ]
    .filter(Boolean)
    .join(' | ');
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<NavbarBlock />
<main class="flex-grow">
  <slot />
</main>
<FooterBlock />
