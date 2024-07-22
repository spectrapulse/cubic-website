<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let sectionClass: string = 'relative py-0 sm:py-0';
</script>

<section class={twMerge(sectionClass, $$props.classSection)}>
  <slot />
</section>
