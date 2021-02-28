module.exports = {
    name: 'help',
    description: "embed",
    execute(message,args, cmd, client, Discord){
        message.react('<a:6093_Animated_Checkmark:808266934055338024>')
        .then((channel) => {
            const newEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('#000000')
            .setTitle('**Uber | help**')
            .setDescription('My prefix is `,`')
            .addFields(
            
              
              {name: "🐸 Fun ", value: "`,helpfun` \n **22 Commands**", inline: true},
              {name: "🕛 Utility", value: "`,utilityhelp` \n **9 Commands**", inline: true},
              {name: '🛡️ Moderation', value: '`,helpmoderation` \n **7 Commands**', inline: true},
              {name: '<:afbeelding_20210226_021726:814667410967363614> Minecraft', value: '`,helpminecraft` \n **11 Commands**', inline: true},
              {name: '📈 Stats', value: '`,helpstats` \n **5 Commands**', inline: true},
              {name: '🆘 Support', value: '`,support` \n **1 Command**', inline: true},
              {name: 'Support server', value: '[Support Server](https://discord.gg/fnvWa53e63)', inline: true },
              {name: 'Inivte bot ', value: '[invite me](https://discord.com/oauth2/authorize?client_id=793214488752554026&scope=bot&permissions=1412701223)', inline: true },
              
            )
            
            .setFooter('Uber bot','https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')
            .setTimestamp();
            message.channel.send(newEmbed);
            })

    }
}