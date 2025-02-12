
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    id: z.string(),
    description: z.string(),
    github: z.string(),
    tools: z.array(z.string())
  })
});



export const collections = { project };