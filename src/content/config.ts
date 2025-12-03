import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		audioUrl: z.string().optional(),
		spotifyUrl: z.string().optional(),
		duration: z.string().optional(),
		episodeNumber: z.number(),
	}),
});

export const collections = { episodes };
