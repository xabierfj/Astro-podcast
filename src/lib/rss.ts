import { podcastInfo } from "./config";
import parseFeed from 'rss-to-json'

export interface Show {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Episode {
  id?: string;
  title: string;
  description: string;
  episodeImage?: string;
  episodeNumber?: string;
  link: string;
  publishedDate: Date;
  duration: string;
  epidose?: string
}