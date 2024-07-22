<script lang="ts">
  // based on https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/navbar/Navbar.svelte
  import { page } from '$app/stores';
  import { twMerge } from 'tailwind-merge';
  import { writable } from 'svelte/store';
  import { setContext } from 'svelte';

  import { NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
  import SocialButton from '$lib/components/button/SocialButton.svelte';

  $: activeUrl = $page.url.pathname;

  let hidden = writable(true);
  setContext('navHidden', hidden);

  export let navClass: string = 'lg:px-4 py-2.5 w-full';
  export let navContainerClass: string =
    'mx-auto flex flex-wrap justify-start items-center max-w-screen-xl';

  // Defaults stored here so its more readable in the code, overriding with this is kinda scuffed.
  const ulClassDefaults =
    'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium';
  const activeClassDefaults =
    'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
  const nonActiveClassDefaults =
    'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>

<nav class={twMerge(navClass, $$props.class)}>
  <div class={navContainerClass}>
    <div class="flex">
      <NavHamburger
        class="-ms-1 mr-5 flex h-[42px] w-[42px] place-items-center justify-center hover:bg-gray-100 hover:dark:bg-primary-800"
        menuClass="text-gray-500 dark:text-gray-400" />
    </div>
    <NavBrand href="/">
      <img src="https://cubicmc.org/images/logo.webp" alt="CubicMC Logo" class="me-3 h-6 sm:h-9" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        CubicMC
      </span>
    </NavBrand>
    <div class="ml-auto flex items-center md:order-2">
      <SocialButton name="discord" href="#" variant="nav" />
      <SocialButton name="github" href="#" variant="nav" />
      <SocialButton name="mastodon" href="#" variant="nav" />
    </div>
    <NavUl
      {activeUrl}
      class="-ms-1 ml-0 xl:ml-5"
      ulClass="{ulClassDefaults} dark:bg-primary-900 dark:border-primary-800 md:dark:bg-transparent md:dark:border-transparent"
      activeClass="{activeClassDefaults} dark:bg-primary-800 md:dark:bg-transparent md:bg-transparent"
      nonActiveClass="{nonActiveClassDefaults} hover:bg-gray-100 dark:hover:bg-primary-700 md:dark:hover:bg-transparent">
      <NavLi href="/">Home</NavLi>
      <NavLi href="/software">Software</NavLi>
      <NavLi href="/team">Team</NavLi>
    </NavUl>
  </div>
</nav>
