<script lang="ts">
  import placeholderImage from '$lib/assets/visualHeroImg_placeholder.jpg';
  export let imgSrc: string = placeholderImage;
  export let imgAlt: string = 'Placeholder image.';
</script>

<div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
  <div class="mr-auto place-self-center lg:col-span-7">
    <div>
      {#if $$slots.h1}
        <h1
          class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          <slot name="h1" />
        </h1>
      {/if}
      {#if $$slots.paragraph}
        <p
          class="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
          <slot name="paragraph" />
        </p>
      {/if}
      {#if $$slots.buttons}
        <!-- class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-x-4 sm:space-y-0 lg:mb-16"> -->
        <div class="space-4 flex flex-row justify-start space-x-4">
          <slot name="buttons" />
        </div>
      {/if}
      <slot />
    </div>
  </div>
  <div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
    <img src={imgSrc} alt={imgAlt} class="rounded-lg" />
  </div>
</div>
