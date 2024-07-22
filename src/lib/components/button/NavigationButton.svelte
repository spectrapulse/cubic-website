<script lang="ts">
  import { Button } from 'flowbite-svelte';

  export let href;
  export let title;
  export let color:
    | 'green'
    | 'none'
    | 'red'
    | 'yellow'
    | 'purple'
    | 'blue'
    | 'light'
    | 'dark'
    | 'primary'
    | 'alternative'
    | undefined = 'primary';
</script>

<a {href}>
  <Button size="lg" {color}>{title}</Button>
</a>
