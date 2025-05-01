import fs from 'fs/promises';

export default async function handler(req, res) {
  try {
    const data = await fs.readFile('data/messages.json', 'utf8');
    const json = JSON.parse(data);
    res.status(200).json({ messages: json.messages || [] });
  } catch (err) {
    res.status(500).json({ messages: [] });
  }
}
