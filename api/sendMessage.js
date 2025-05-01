import { saveMessage } from './utils.js';

export default async function handler(req, res) {
  const { message } = req.body;
  await saveMessage(message);
  res.status(200).json({ success: true });
}
