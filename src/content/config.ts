import { defineCollection, z } from "astro:content";

const social = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    icon: z.string().url(),
  }),
});

export const collections = { social };
