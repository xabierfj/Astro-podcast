import { podcastInfo } from "./config";
import Alberto from '../images/alberto.webp';
import Carlos from '../images/carlos.webp';

export default podcastInfo({
  title:'Proletario y Parasito',
  description:'El podcast que no predijeron los Simpsons. Si eres de los que todo te sale a pedir de Milhouse, este es tu podcast.',
  hosts: [
    {
      name: 'Carlos Noroeste',
      img: Carlos.src,
      bluesky: 'https://bsky.app/profile/carlosnoroeste.bsky.social',
    },
    {
      name: 'Alberto Graupera',
      img: Alberto.src,
      bluesky: 'https://bsky.app/profile/albertograupera.bsky.social',
    }
  ],
  platforms: {
    spotify: 'https://open.spotify.com/show/5Ktro3IjduD1HTe13yq2k1',
    ivox: 'https://www.ivoox.com/podcast-proletario-parasito_sq_f11573515_1.html',
    kofi: 'https://ko-fi.com/proletarioyparasito',
    bluesky: 'https://bsky.app/profile/pyppodcast.bsky.social',
    instagram: 'https://www.instagram.com/proletarioyparasitopodcast/'
  },
  rssFeed: 'https://anchor.fm/s/fae337f8/podcast/rss'
});