<script>
  import { Section, HeroDefaultBlock, NavigationButton } from '$lib';
</script>

<Section classSection="py-8 px-4">
  <HeroDefaultBlock classDiv=" text-center lg:py-16 lg:px-12" classButtons="sm:justify-center">
    <svelte:fragment slot="news">We have a brand new website!</svelte:fragment>
    <svelte:fragment slot="h1">Hhhh hhh hhhh hh hhhhhhh?</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, veritatis impedit.
      Repellat obcaecati at aliquam nemo vel tenetur quia accusantium, numquam temporibus
      voluptatem! Voluptatibus nemo cum vitae dolorum tempore illo.
    </svelte:fragment>
    <svelte:fragment slot="buttons">
      <NavigationButton href="#" title="Learn more" />
      <NavigationButton href="#" title="Learn more" />
    </svelte:fragment>
  </HeroDefaultBlock>
</Section>
