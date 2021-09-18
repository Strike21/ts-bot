import { Client, Message, MessageEmbed } from 'discord.js';

exports.run = (client: Client, message: Message) => {
    const pingEmbed = new MessageEmbed()
        .setTitle('🏓 Pong!')
        .setDescription(`Minha latência é de: ${client?.ws.ping}ms.`)
        .setColor('BLUE');
    return message.channel.send({ embeds: [pingEmbed] });
};

exports.config = {
    name: 'ping'
}