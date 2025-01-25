import { defineCollection, z } from "astro:content";

const social = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    icon: z.string().url(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    name: z.string(),
    link: z.string(),
    repository: z.string(),
    image: z.string(),
    stack: z.string(),
    description: z.string(),
  }),
});

export const collections = { social, projects };
