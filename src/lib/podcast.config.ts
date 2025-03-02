import { podcastInfo } from "./config";

export default podcastInfo({
  title:'Proletario y Parasito',
  description:'El podcast que no predijeron los Simpsons. Si eres de los que saben dibujar la dignidad, todo te sale a pedir de Milhouse y pides de beber albóndigas, este es tu podcast.',
  hosts: [
    {
      name: 'Carlos Noroeste',
      img: 'https://cdn.bsky.app/img/avatar/plain/did:plc:2au43qgbq3qryxot2i65mnq4/bafkreicuyon5t2qyjmq4iitpubcl4mkxinfwdfkmjyeok4hs5zad6gt4vu@jpeg',
      bluesky: 'https://bsky.app/profile/carlosnoroeste.bsky.social',
    },
    {
      name: 'Alberto Graupera',
      img: 'https://cdn.bsky.app/img/avatar/plain/did:plc:ahpmghd456jekhv7n4euifpr/bafkreig4rzdc7gksp3hfzq5j64vc2etcw2yvvh63q4b6apl7y4g3yohssy@jpeg',
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