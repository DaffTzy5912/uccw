import { saveMessage } from './utils.js';

export default async function handler(req, res) {
  const { room, name, text } = req.body;
  await saveMessage(room, { name, text });
  res.status(200).json({ success: true });
}
