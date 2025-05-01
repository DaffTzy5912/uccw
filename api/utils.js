import fs from 'fs/promises';

export async function saveMessage(room, message) {
  const path = `data/${room}.json`;
  try {
    const data = await fs.readFile(path, 'utf8');
    const json = JSON.parse(data);
    json.messages.push(message);
    await fs.writeFile(path, JSON.stringify(json));
  } catch {
    await fs.writeFile(path, JSON.stringify({ messages: [message] }));
  }
}
