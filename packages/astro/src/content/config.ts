import { defineCollection, z } from "astro:content";

const page = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    order: z.number(),
    bgColor: z.string(),
    icon: z.string(),
  }),
});

export const collections = { page };
