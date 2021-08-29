import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config()

const client = new Discord.Client({
    intents : 32767
});

client.on("ready", () => {
    console.log("TS on")
});

client.on('messageCreate', (message) => {
    if(message.content == 'ping') {
        message.react("🏓")
        message.reply(`${client.ws.ping}`)
    }
})

client.login(process.env.TOKEN)