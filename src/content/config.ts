
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({image}) => z.object({
    title: z.string(),
    id: z.string(),
    description: z.string(),
    github: z.string().optional(),
    tools: z.array(z.string()),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: image()
  })
});


const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
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