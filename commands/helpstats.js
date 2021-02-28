
module.exports = {
    name: 'helpstats',
    aliases: ['statshelp', 'hs'],
    description: "embed",
    execute(message,args, cmd, client, Discord){
        message.react('<a:6093_Animated_Checkmark:808266934055338024>')
        .then((channel) => {
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#000000')
        .addFields(
            {name: "helputility commands:" , value:'`,mcstats` `,covid` `,uptime` `,stats` `,serverinfo` ` '},
        )
        .setFooter('Uber bot','https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')
        .setTimestamp();

        message.channel.send(newEmbed);
        
        })
    }
}