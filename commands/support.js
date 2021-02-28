
module.exports = {
    name: 'support',
    aliases: ['info'],
    description: "embed",
    execute(message,args, cmd, client, Discord){
        message.react('<a:6093_Animated_Checkmark:808266934055338024>')
        .then((channel) => {
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#000000')
        .addFields(
            {name: "Support server" , value:'[support](https://discord.gg/fnvWa53e63)' },
            {name: "bot invite" , value:'[invite me](https://discord.com/oauth2/authorize?client_id=793214488752554026&scope=bot&permissions=1412701223)' },
            {name: "Email:" , value:'[UberDiscordBot@gmail.com](mailto:UberDiscordBot@gmail.com)' },
            

            
        )
        .setFooter('Uber bot','https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')
        .setTimestamp();
        

        message.channel.send(newEmbed);
        
        })
    }
}