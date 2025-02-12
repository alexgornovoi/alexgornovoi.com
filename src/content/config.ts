
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    id: z.string(),
    description: z.string(),
    github: z.string().optional(),
    tools: z.array(z.string()),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
});


const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    id: z.string(),
    description: z.string(),
    github: z.string().optional(),
    tools: z.array(z.string()),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    relatedProject: z.array(z.string()).optional()
  })
});



export const collections = { project, blog };