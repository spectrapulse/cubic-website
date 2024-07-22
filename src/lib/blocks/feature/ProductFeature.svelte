<script lang="ts">
</script>

<section class="relative mb-16">
  <div class="mx-auto max-w-screen-xl px-4">
    <!-- ProductFeatureHead -->
    <div class="mb-8 max-w-2xl text-left">
      {#if $$slots.categoryTitle}
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">
          <slot name="categoryTitle"></slot>
        </h2>
      {/if}
      {#if $$slots.categoryDescription}
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          <slot name="categoryDescription"></slot>
        </p>
      {/if}
    </div>
    <!-- ProductFeatureList -->
    <div class="grid gap-8 lg:grid-cols-3">
      <slot></slot>
    </div>
  </div>
</section>
