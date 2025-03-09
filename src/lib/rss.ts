import FormattedDate, { Slugify, TitleBeautifier, Truncate } from './utils';
import podcastConfig from './podcast.config';
import Parser from 'rss-parser';

const parser = new Parser();
const feed = await parser.parseURL(podcastConfig.rssFeed);

export const episodes = feed.items.map((item) => {
  const mediaLink = item.enclosure as { url: string, type: string };
  const duration = item.itunes.duration as string;
  const image = item.itunes.image as string;
  const episodeSlug = Slugify(item.title as string);
  return {
    title: TitleBeautifier(item.title as string),
    slug: episodeSlug,
    description: Truncate(item.contentSnippet, 260),
    guid: { text: item.guid },
    publishDate: FormattedDate(item.pubDate as string),
    enclosure: { url: mediaLink.url, type: mediaLink.type },
    duration: duration,
    image: image,
  };
});

