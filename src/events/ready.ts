import { Client } from 'discord.js';

module.exports = (client: Client) => {
    client.user?.setActivity(`Olá mundo!`, { type: 'LISTENING' });
    console.clear();
    console.log('Loguei chefia.')
};