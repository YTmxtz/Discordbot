
const fetch = require('node-fetch');
const { color, footer } = require('../lib/embed.json')
module.exports = {
    name: 'namehistory',
    description: "Shows the name history of a user." ,
    aliases: [ "nh", "name" ],
    async execute(message,args, cmd, client, Discord){
        if(!args[0]) {
            return message.channel.send('You need to specify a player!')
        }
        
        const playerUUIDFetch = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
        const playerUUIDData = await playerUUIDFetch.json();
        const playerNameHistory = await fetch(`https://api.mojang.com/user/profiles/${playerUUIDData.id}/names`);
        const playerNameData = await playerNameHistory.json();

        let embed = new Discord.MessageEmbed()
            .setTitle('Name History')
            .setDescription(`${playerNameData[playerNameData.length - 1].name}'s Name History`)
            .setColor(color)
            .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

        for(length in playerNameData) {
            for(key in playerNameData[length]) {
                if(key == 'name') {
                    embed.addField('━━━━', playerNameData[length][key])
                }
            }
        }

        message.channel.send(embed); 
    }
}