<script lang="ts">
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  export let sourceURL = '';
</script>

<article
  class="rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-md dark:border-primary-800 dark:bg-primary-900">
  {#if $$slots.productTitle}
    <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <slot name="productTitle"></slot>
    </h2>
  {/if}
  {#if $$slots.productDescription}
    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
      <slot name="productDescription"></slot>
    </p>
  {/if}
  {#if sourceURL}
    <div class="flex items-center justify-end">
      <a
        href={sourceURL}
        class="inline-flex items-center text-end font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:dark:text-white">
        View Source <ArrowRightOutline size="md" class="-mr-1 ml-1" />
      </a>
    </div>
  {/if}
</article>
