<script lang="ts">
  import { TeamWrapper, TeamHeader, TeamBody, TeamItem } from 'flowbite-svelte-blocks';
  import { Section, HeroDefaultBlock, SocialButton } from '$lib';
  import { type IconType } from '$lib/components/icon/BrandIcon';

  interface Social {
    href: string;
    type: IconType;
  }

  interface Member {
    href: string;
    avatar: string;
    name: string;
    jobTitle: string;
    description: string;
    socials: Social[];
  }

  const spectrapulse: Member = {
    href: '',
    avatar: 'https://github.com/spectrapulse.png',
    name: 'spectrapulse',
    jobTitle: 'Full Time Robot',
    description:
      'A robot that makes computers do things using letters, symbols and a little bit of math.',
    socials: [
      {
        type: 'twitter',
        href: 'https://twitter.com/spectrapulse',
      },
      {
        type: 'github',
        href: 'https://github.com/spectrapulse',
      },
      {
        type: 'linkedin',
        href: 'https://linkedin.com/in/spectrapulse',
      },
    ],
  };

  const members: Member[] = [spectrapulse, spectrapulse, spectrapulse];
</script>

<Section classSection="sm:py-0 sm:py-0 sm:pt-10 sm:pt-20">
  <HeroDefaultBlock classDiv="text-center">
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
  <TeamWrapper>
    <TeamHeader>
      <svelte:fragment slot="label">Our Team</svelte:fragment>
      <p class="font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nobis vitae esse nisi
        incidunt illo sint eum dolorum unde nemo voluptate quaerat, distinctio cupiditate,
        voluptatibus molestias cum dolore consectetur veritatis.
      </p>
    </TeamHeader>
    <TeamBody>
      {#each members as { href, avatar, name, jobTitle, description, socials }}
        <TeamItem
          {href}
          src={avatar}
          alt={name}
          {name}
          {jobTitle}
          divClass="border dark:bg-primary-900 dark:border-primary-800 items-center bg-gray-100 border-gray-200 rounded-lg shadow sm:flex">
          <p class="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <svelte:fragment slot="social">
            {#each socials as { type, href }}
              <SocialButton {href} name={type} variant="inline" />
            {/each}
          </svelte:fragment>
        </TeamItem>
      {/each}
    </TeamBody>
  </TeamWrapper>
</Section>
