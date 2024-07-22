<script lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { type IconType, IconMap } from '$lib/components/icon/BrandIcon';

  export let name: IconType;
  export let href: string;
  export let variant: 'nav' | 'inline';
</script>

{#if variant === 'nav'}
  <a {href}>
    <button
      class="mx-1.5 flex h-[42px] w-[42px] shrink-0 place-items-center justify-center rounded-lg p-2 text-xl text-gray-500 hover:bg-gray-100 hover:text-gray-950 hover:dark:bg-primary-800 hover:dark:text-white">
      <FontAwesomeIcon icon={IconMap[name]} />
    </button>
  </a>
{:else if variant === 'inline'}
  <a {href} class="text-xl text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <FontAwesomeIcon icon={IconMap[name]} />
  </a>
{/if}
