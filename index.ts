import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config()


const client = new Discord.Client({
    intents : 32767
});

client.on("ready", () => {
    console.log("TS on")

    const ownerGuildId = "831885012890550343"
    const ownerGuild = client.guilds.cache.get(ownerGuildId)
    let commands

    if(ownerGuild) {
        commands = ownerGuild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create ({
        name:'ping',
        description : "Latência do bot em relação a api!"
    })
});

client.on("interactionCreate", async(interaction) => {
    if(!interaction.isCommand()) {
        return
    }

    const {commandName, options} = interaction

    if(commandName === 'ping') {
        interaction.reply({ content:`${client.ws.ping}`, ephemeral:true})
    }
})

client.on('messageCreate', (message) => {
    if(message.content == 'ping') {
        message.react("🏓")
        message.reply(`${client.ws.ping}`)
    }

    if(message.content == 'teste') {
        const teste = new Discord.MessageEmbed()
            .setTitle("__**\🧪 Primeira embed em ts \🧪**__ ")
            .setDescription("Embed teste")
            .setColor("#00FFFF")
        message.react("🧪")
        message.reply({ embeds : [teste] })
    }
})

client.login(process.env.TOKEN)