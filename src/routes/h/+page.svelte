<script lang="ts">
  import { HeroHeader, Section } from 'flowbite-svelte-blocks';
</script>

<!-- Really putting the E in easter egg -->
<Section name="heroVisual">
  <div class="mr-auto place-self-center lg:col-span-7">
    <HeroHeader
      h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
      pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      <svelte:fragment slot="h1">h?</svelte:fragment>
      <svelte:fragment slot="paragraph">very h indeed</svelte:fragment>
    </HeroHeader>
  </div>
</Section>
