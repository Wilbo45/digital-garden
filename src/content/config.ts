/**
 * CONTENT COLLECTIONS
 * ─────────────────────────────────────────────────────────────
 * Blog post frontmatter reference:
 *
 *   ---
 *   title: "Your post title"          (required)
 *   description: "One-line summary"   (optional, shown in listings)
 *   pubDate: 2026-02-22               (required)
 *   updatedDate: 2026-03-01           (optional)
 *   tags: ["design", "data"]          (optional — use lowercase kebab-case)
 *   draft: true                       (optional — hides post from listings)
 *   ---
 *
 * Work item frontmatter reference:
 *
 *   ---
 *   title: "Project name"             (required)
 *   description: "What it is"         (required)
 *   year: 2025                        (required)
 *   tags: ["d3", "react"]             (optional)
 *   url: "https://..."                (optional — live link)
 *   repoUrl: "https://github.com/..." (optional — source link)
 *   draft: true                       (optional)
 *   ---
 */

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    tags: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, work };
