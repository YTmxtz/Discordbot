
module.exports = {
    name: 'credits',
    aliases: ['credit'],
    description: "embed",
    execute(message,args, cmd, client, Discord){
        message.react('<a:6093_Animated_Checkmark:808266934055338024>')
        .then((channel) => {
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(`Mxtz#0001`, `https://cdn.discordapp.com/avatars/755136326977847439/a_3fc1637ce93edf7f33bf83d4c7fd7dfc.gif?size=4096`)
        .setColor('#000000')
        .addFields(
            {name: "Credits" , value:'This bot is made by Mxtz', },
        )
        .setFooter('Uber bot','https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')
        .setTimestamp();

        message.channel.send(newEmbed);
        
        })
    }
}