import { defineCollection } from 'astro:content';
import { docsLoader } from '@pelagornis/page/loaders';
import { docsSchema } from '@pelagornis/page/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
