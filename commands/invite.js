const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'invite',
    description: "this is a ping command!",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**invite me :D**')
        .addFields(
            {name: "Invite link", value: '**[Press here](https://discord.com/oauth2/authorize?client_id=793214488752554026&scope=bot&permissions=1412701223)**'},
        )
        .setFooter('');
        message.author.send(newEmbed)
    }
}
