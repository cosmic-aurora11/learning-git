import { getCollection } from 'astro:content';

export async function GET() {
  const [recaps, lore, characters, workouts] = await Promise.all([
    getCollection('recaps'),
    getCollection('lore'),
    getCollection('characters'),
    getCollection('workouts')
  ]);

  const items = [
    {
      type: 'Page',
      title: 'The Arcane Atlas',
      summary: 'Campaign hub home page.',
      url: '/',
      body: ''
    },
    {
      type: 'Page',
      title: 'Characters',
      summary: 'Browse characters and NPCs.',
      url: '/characters',
      body: ''
    },
    {
      type: 'Page',
      title: 'Recaps',
      summary: 'Read session recaps.',
      url: '/recaps',
      body: ''
    },
    {
      type: 'Page',
      title: 'Lore',
      summary: 'Explore regions, factions, and mysteries.',
      url: '/lore',
      body: ''
    },
    {
      type: 'Page',
      title: "Player's Gym",
      summary: 'Practice drills and table skills.',
      url: '/gym',
      body: ''
    },
    ...recaps.map((entry) => ({
      type: 'Recap',
      title: entry.data.title,
      summary: entry.data.summary,
      url: `/recaps/${entry.slug}`,
      body: entry.body
    })),
    ...lore.map((entry) => ({
      type: 'Lore',
      title: entry.data.title,
      summary: entry.data.summary,
      url: `/lore/#${entry.slug}`,
      body: entry.body
    })),
    ...characters.map((entry) => ({
      type: 'Character',
      title: entry.data.name,
      summary: entry.data.blurb || `${entry.data.race} ${entry.data.class}`,
      url: `/characters/${entry.slug}`,
      body: entry.body
    })),
    ...workouts.map((entry) => ({
      type: 'Workout',
      title: entry.data.title,
      summary: entry.data.summary,
      url: `/gym/#${entry.slug}`,
      body: entry.body
    }))
  ].map((item) => ({
    ...item,
    snippet: item.summary || item.body.slice(0, 140)
  }));

  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
