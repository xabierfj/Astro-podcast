import { slugify, truncate } from './utils';
import podcastConfig from './podcast.config';
import Parser from 'rss-parser';

const parser = new Parser();
const feed = await parser.parseURL(podcastConfig.rssFeed);

export const episodes = feed.items.map((item) => {
  const mediaLink = item.enclosure as { url: string, type: string };
  const duration = item.itunes.duration as string;
  const image = item.itunes.image as string;
  return {
    title: item.title,
    description: item.description,
    guid: { text: item.guid },
    publishDate: item.pubDate,
    enclosure: { url: mediaLink.url, type: mediaLink.type },
    duration: duration,
    image: image,
  };
});

