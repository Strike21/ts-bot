import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const client: Client = new Client({ intents: 32767 });
client.commands = new Collection();

//Handler de eventos
const events = readdirSync('./src/events/');
for (const files of events) {
    const event = require(`./events/${files}`);
    const eventName = files.split('.')[0];
    client.on(eventName, event.bind(null, client));
}

//Handler de comandos
const commands = readdirSync('./src/commands/');
for (const files of commands) {
    const pull = require(`./commands/${files}`);
    client.commands.set(pull.config.name, pull);
}

client.login('');
