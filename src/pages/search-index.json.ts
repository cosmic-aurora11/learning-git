import { getCollection } from 'astro:content';

export async function GET() {
  const [recaps, lore] = await Promise.all([
    getCollection('recaps'),
    getCollection('lore')
  ]);

  const items = [
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
