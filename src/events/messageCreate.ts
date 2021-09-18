import { Client, Message } from 'discord.js';
const prefix = 't!';

module.exports = (client: Client, message: Message) => {
    if (message.author.bot || message.channel.type == 'DM') return;
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();
    if (!command) return;
    const exec = client.commands.get(command);

    try {
        exec?.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
};