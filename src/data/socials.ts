import {
  faDiscord,
  faFacebook,
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
  faMastodon,
  faPatreon,
  faSteam,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';
import { Social } from 'src/interfaces/Social';

export const socials: Social[] = [
  {
    name: 'Work Discord',
    icon: faDiscord,
    url: 'https://chat.nhcarrigan.com',
    text: '#FFFFFF',
    background: '#5865F2',
    hover: false,
  },
  {
    name: 'Fun Discord',
    icon: faDiscord,
    url: 'https://chat.naomi.lgbt',
    text: '#FFFFFF',
    background: '#5865F2',
    hover: false,
  },
  {
    name: 'Mastodon',
    icon: faMastodon,
    url: 'https://mastodon.naomi.lgbt/@naomi',
    text: '#FFFFFF',
    background: '#1DA1F2',
    hover: false,
  },
  {
    name: 'Twitch',
    icon: faTwitch,
    url: 'https://twitch.tv/naomilgbt',
    text: '#E5E5E5',
    background: '#9146FF',
    hover: false,
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/naomi-lgbt',
    text: '#f5f5f5',
    background: '#333333',
    hover: false,
  },
  {
    name: 'Patreon',
    icon: faPatreon,
    url: 'https://patreon.com/nhcarrigan',
    text: '#ffffff',
    background: '#f96854',
    hover: false,
  },
  {
    name: 'Steam',
    icon: faSteam,
    url: 'https://steamcommunity.com/id/naomi-lgbt',
    text: '#ffffff',
    background: '#000000',
    hover: false,
  },
  {
    name: 'freeCodeCamp',
    icon: faFreeCodeCamp,
    url: 'https://forum.freecodecamp.org/u/nhcarrigan',
    text: '#FFFFFF',
    background: '#0a0a23',
    hover: false,
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://linkedin.com/in/naomi-lgbt',
    text: '#FFFFFF',
    background: '#0a66c2',
    hover: false,
  },
  {
    name: 'Facebook',
    icon: faFacebook,
    url: 'https://facebook.com/nhcarrigan',
    text: '#FFFFFF',
    background: '#4267B2',
    hover: false,
  },
];
