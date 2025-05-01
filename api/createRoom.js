import fs from 'fs/promises';

export default async function handler(req, res) {
  const { room } = req.body;
  try {
    await fs.writeFile(`data/${room}.json`, JSON.stringify({ messages: [] }));
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ success: false });
  }
}
