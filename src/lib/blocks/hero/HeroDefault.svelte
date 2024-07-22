<script lang="ts">
  import HeroNewsCta from '$lib/components/cta/HeroNewsCTA.svelte';
  import { twMerge } from 'tailwind-merge';

  export let divClass: string = 'mx-auto max-w-screen-xl px-4 py-8 text-left';
  export let h1Class: string =
    'mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white';
  export let h2Class: string =
    'mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:mb-16 dark:text-white';
  export let pClass: string =
    'mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400';
  export let buttonsClass: string =
    'mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-x-4 sm:space-y-0 lg:mb-16';
</script>

<div class={twMerge(divClass, $$props.classDiv)}>
  {#if $$slots.news}
    <HeroNewsCta>
      <slot name="news" />
    </HeroNewsCta>
  {/if}
  <div>
    {#if $$slots.h1}
      <h1 class={twMerge(h1Class, $$props.classH1)}>
        <slot name="h1" />
      </h1>
    {/if}
    {#if $$slots.h2}
      <h2 class={twMerge(h2Class, $$props.classH2)}>
        <slot name="h2" />
      </h2>
    {/if}
    {#if $$slots.paragraph}
      <p class={twMerge(pClass, $$props.classP)}>
        <slot name="paragraph" />
      </p>
    {/if}
    {#if $$slots.buttons}
      <div class={twMerge(buttonsClass, $$props.classButtons)}>
        <slot name="buttons" />
      </div>
    {/if}
    <slot />
  </div>
</div>
