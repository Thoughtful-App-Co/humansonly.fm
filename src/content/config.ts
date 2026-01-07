import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		audioUrl: z.string().optional(),
		spotifyUrl: z.string().optional(),
		youtubeUrl: z.string().optional(),
		duration: z.string().optional(),
		episodeNumber: z.number(),
		// Short-form video clips for marketing/hooks
		shorts: z.array(z.object({
			url: z.string(),
			title: z.string(),
			platform: z.enum(['youtube', 'tiktok', 'instagram']).optional(),
		})).optional(),
	}),
});

export const collections = { episodes };
