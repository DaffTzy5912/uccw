import fs from 'fs/promises';

export default async function handler(req, res) {
  const { room } = req.query;
  try {
    const data = await fs.readFile(`data/${room}.json`, 'utf8');
    const json = JSON.parse(data);
    res.status(200).json({ messages: json.messages });
  } catch {
    res.status(200).json({ messages: [] });
  }
}
