import fs from 'fs/promises';

export async function saveMessage(message) {
  try {
    const data = await fs.readFile('data/messages.json', 'utf8');
    const json = JSON.parse(data);
    json.messages.push(message);
    await fs.writeFile('data/messages.json', JSON.stringify(json));
  } catch {
    await fs.writeFile('data/messages.json', JSON.stringify({ messages: [message] }));
  }
}
