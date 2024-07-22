<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { ChevronRightOutline } from 'flowbite-svelte-icons';
  export let href: string = '#';
  export let aClass: string =
    'inline-flex justify-between items-center p-1.5 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700';
</script>

<a {href} class={twMerge(aClass, $$props.classA)}>
  <span class="mr-3 rounded-full bg-accent-600 px-4 py-1.5 text-xs font-bold text-white">New</span>
  <span class="text-sm font-medium"><slot /></span>
  <svelte:component this={ChevronRightOutline} size="xs" class={twMerge('ml-2', $$props.class)} />
</a>
