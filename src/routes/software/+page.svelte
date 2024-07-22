<script lang="ts">
  import { Section, ProductFeatureBlock, ProductFeatureWrapper, HeroDefaultBlock } from '$lib';

  const servers = [
    {
      name: 'Cringe 1',
      description: 'This is cringe, very cringe.',
      href: 'https://cringe.me',
    },
    {
      name: 'Cringe 2',
      description: 'This is cringe, very cringe.',
    },
  ];

  const libraries = [
    {
      name: 'Cringe1 (For developers)',
      description: 'Insert cute valorant reference here',
      href: 'https://cringe.me',
    },
    {
      name: 'Cringe2 (For developers)',
      description: 'Insert cute valorant reference here',
    },
    {
      name: 'Cringe3 (For developers)',
      description: 'Insert cute valorant reference here',
    },
    {
      name: 'Cringe4 (For developers)',
      description: 'Insert cute valorant reference here',
    },
    {
      name: 'Cringe5 (For developers)',
      description: 'Insert cute valorant reference here',
      href: 'https://cringe.me',
    },
  ];
</script>

<Section classSection="sm:pt-10 sm:pt-20 ">
  <HeroDefaultBlock>
    <svelte:fragment slot="h1">Title describing purpose of page</svelte:fragment>
    <svelte:fragment slot="paragraph">
      A short paragraph as introduction to the page. Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Temporibus nesciunt animi sit ullam reiciendis, minima explicabo harum quam
      mollitia excepturi doloremque quo dolor dignissimos earum eveniet assumenda distinctio
      aspernatur! Suscipit!
    </svelte:fragment>
  </HeroDefaultBlock>
</Section>

<Section>
  <ProductFeatureBlock>
    <svelte:fragment slot="categoryTitle">Server Software</svelte:fragment>
    <svelte:fragment slot="categoryDescription">
      Short category description. A short paragraph as introduction to the page. Lorem ipsum dolor
      sit, amet consectetur adipisicing elit.
    </svelte:fragment>
    {#each servers as product}
      <ProductFeatureWrapper sourceURL={product.href}>
        <svelte:fragment slot="productTitle">{product.name}</svelte:fragment>
        <svelte:fragment slot="productDescription">{product.description}</svelte:fragment>
      </ProductFeatureWrapper>
    {/each}
  </ProductFeatureBlock>
</Section>

<Section>
  <ProductFeatureBlock>
    <svelte:fragment slot="categoryTitle">Libraries</svelte:fragment>
    <svelte:fragment slot="categoryDescription">
      Short category description. A short paragraph as introduction to the page. Lorem ipsum dolor
      sit, amet consectetur adipisicing elit.
    </svelte:fragment>
    {#each libraries as product}
      <ProductFeatureWrapper sourceURL={product.href}>
        <svelte:fragment slot="productTitle">{product.name}</svelte:fragment>
        <svelte:fragment slot="productDescription">{product.description}</svelte:fragment>
      </ProductFeatureWrapper>
    {/each}
  </ProductFeatureBlock>
</Section>
