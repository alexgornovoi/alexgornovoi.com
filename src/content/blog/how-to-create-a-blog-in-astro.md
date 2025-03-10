---
title: How to create a blog in Astro
id: how-to-create-a-blog-in-astro
description: Learn how to create a blog with Astro’s Content Collections.
tools: ["Astro", "Javascript", "Tailwindcss"]
pubDate: 3/10/2025
project: alexgornovoidotcom
---

This article will discuss how to create a blog using [Astro's Content Collection](https://docs.astro.build/en/guides/content-collections/). Astro offers multiple ways to customize content collections; however, I will focus on creating collections for Markdown files using the `glob` loader, as this method worked best for me when building this blog.

## Defining the `config.ts`

To get started, we first define our `config.ts` file, which will reside in `/src/content`. We begin by importing the required tools and defining our collection along with the loader method.
```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
});
```

In the above code, we define our loader method to use `glob` and to load files matching the regex pattern `"**/*.md"` in the directory `"./src/content/blog"`. After defining where the content for our collection is loaded from, we will define the schema for our blogs and export it.


```ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    id: z.string(),
    description: z.string(),
    tools: z.array(z.string()),
    pubDate: z.coerce.date(),
    project: z.string().optional(),
  }),
});

export const collections = {  blog };
```

Astro's `defineCollection` uses [Zod data types](https://docs.astro.build/en/guides/content-collections/#defining-datatypes-with-zod) for defining the type of values within the schema. Using these data types, you can define a schema tailored to your needs.

## Creating a test blog

After defining the config, we will now write a quick test blog. Our Markdown file must include frontmatter that defines the values in our schema.


```md
---
title: Test
id: test
description: This is a test blog
tools: ["Markdown", "Astro"]
pubDate: 3/10/2025
---

This is a test blog!
```

## Creating Static Page Paths

Now that we have a test blog written, we can use the `slug` pattern provided by Astro. I recommend creating a new folder (I named mine `blog`) in your `pages` directory, where you will keep the blog's main page and the `slug` page. In this directory, create a file named `[id].astro`. We will then write the logic for creating dynamic routes by using `getStaticPaths()`.

```ts
---
import { getCollection, render } from "astro:content";

export async function getStaticPaths() {
  const blogs = await getCollection("blog");
  return blogs.map((blog) => ({
    params: { id: blog.id },
    props: { blog },
  }));
}

const { blog } = Astro.props;
const { Content } = await render(blog);
---

<Content />
```

After reloading the app, you will be able to view the content of the test blog at the route `/blog/test`. From here, you can further customize your blog by using [layouts](https://docs.astro.build/en/basics/layouts/) and various [plugins](https://docs.astro.build/en/guides/markdown-content/#markdown-plugins).
