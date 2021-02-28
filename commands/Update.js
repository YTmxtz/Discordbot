module.exports = {
    name: 'update',
    description: "embed",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Update!')
        .addFields(
            {name: 'everyone!', value: 'I just maked my own bot!'},
            {name: 'Commands:', value: '!ping, !leaderboard,!iq'},
            {name: 'I need More Suggestions', value: 'Dm me for suggestions'},
        )
        .setFooter('');

        message.channel.send(newEmbed);

    }
}
