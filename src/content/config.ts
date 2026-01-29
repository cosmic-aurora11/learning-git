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
    blurb: z.string().optional(),
    proficiencies: z.array(z.string()).optional(),
    abilities: z.array(z.object({
      name: z.string(),
      group: z.string().optional(),
      tags: z.array(z.string()).optional(),
      summary: z.string().optional(),
      details: z.string().optional(),
      uses: z.string().optional(),
      recharge: z.string().optional(),
      order: z.number().optional()
    })).optional(),
    spells: z.object({
      ability: z.string().optional(),
      saveDC: z.number().optional(),
      attackBonus: z.number().optional(),
      sections: z.array(z.object({
        level: z.number().optional(),
        label: z.string(),
        items: z.array(z.object({
          name: z.string(),
          tags: z.array(z.string()).optional(),
          summary: z.string().optional(),
          details: z.string().optional(),
          uses: z.string().optional(),
          recharge: z.string().optional(),
          order: z.number().optional()
        }))
      })).optional()
    }).optional(),
    magicItems: z.array(z.object({
      name: z.string(),
      group: z.string().optional(),
      tags: z.array(z.string()).optional(),
      summary: z.string().optional(),
      details: z.string().optional(),
      uses: z.string().optional(),
      recharge: z.string().optional(),
      order: z.number().optional()
    })).optional(),
    ac: z.number().optional(),
    hp: z.number().optional(),
    xpPips: z.number().int().min(0).max(6).optional(),
    sheetUrl: z.string().url().optional(),
    history: z.string().optional(),
    roleplayTips: z.array(z.string()).optional()
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
