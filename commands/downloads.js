module.exports = {
    name: 'downloads',
    description: "embed",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**DOWNLOADS**')
        .addFields(
            {name: "Webhook Spammer", value: '||[Webhookspammer](https://ytzmo.github.io/webhook_spammer/)||'},
        )
        .setFooter('');

        message.channel.send(newEmbed);

    }
}
