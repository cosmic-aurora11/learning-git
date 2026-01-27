import { defineCollection, z } from 'astro:content';

const recaps = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sessionNumber: z.number(),
    date: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    heroImage: z.string().optional()
  })
});

const characters = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    race: z.string(),
    class: z.string(),
    playerName: z.string().optional(),
    tags: z.array(z.string()).optional(),
    portrait: z.string(),
    blurb: z.string().optional()
  })
});

const lore = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Regions/Locations', 'Factions', 'Important NPCs', 'Magical Oddities']),
    summary: z.string(),
    tags: z.array(z.string()).optional()
  })
});

const workouts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'Roleplay reps',
      'Combat fundamentals',
      'Spellcasting clarity',
      'Table teamwork'
    ]),
    summary: z.string()
  })
});

export const collections = { recaps, characters, lore, workouts };
