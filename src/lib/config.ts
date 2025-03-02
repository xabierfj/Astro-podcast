export type Host = {
  name: string;
  img: string;
  bluesky: string;
}

export type PodscastInfo = {
  title: string; 
  description: string;
  hosts: Array<Host>;
  platforms: {
    spotify: string;
    ivox: string;
    kofi: string;
    bluesky: string;
    instagram: string;
  };
  rssFeed: string;
}

export const podcastInfo = (config: PodscastInfo) => config;