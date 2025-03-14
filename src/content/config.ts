import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      id: z.string(),
      description: z.string(),
      github: z.string().optional(),
      tools: z.array(z.string()),
      pubDate: z.coerce.date(),
      cover: image(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    id: z.string(),
    description: z.string(),
    tools: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    project: z.string().optional(),
  }),
});

export const collections = { project, blog };
