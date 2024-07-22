import {
  type IconDefinition,
  faDiscord,
  faGithub,
  faMastodon,
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const IconMap: Record<string, IconDefinition> = {
  discord: faDiscord,
  github: faGithub,
  mastodon: faMastodon,
  facebook: faFacebook,
  linkedin: faLinkedin,
  twitter: faTwitter,
} as const;

export type IconType = keyof typeof IconMap;
