import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const episodes = await getCollection('episodes');
  return rss({
    title: 'humansonly.fm',
    description: 'A podcast exploring human-centered design, thoughtful technology, and building apps that respect human agency.',
    site: context.site,
    items: episodes.map((episode) => ({
      title: episode.data.title,
      pubDate: episode.data.pubDate,
      description: episode.data.description,
      link: `/${episode.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
