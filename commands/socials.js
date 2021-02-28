const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require('../lib/embed.json')
const { apikey } = require('../lib/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'socials',
    async execute(message,args, cmd, client, Discord) {
        hypixelAPIReborn.getPlayer(args[0]).then(async (player) => {
            const playerUUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
            const playerUUIDData = await playerUUID.json();

            let embed = new Discord.MessageEmbed()
                .setTitle('Social Media')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setThumbnail(`https://visage.surgeplay.com/face/256/${playerUUIDData.id}.png`)
                .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')


            if (player.socialMedia[0] != undefined || player.socialMedia[0] != null) {
                embed.addField(player.socialMedia[0].name, player.socialMedia[0].link)
            }

            if (player.socialMedia[1] != undefined || player.socialMedia[1] != null) {
                embed.addField(player.socialMedia[1].name, player.socialMedia[1].link)
            }

            if (player.socialMedia[2] != undefined || player.socialMedia[2] != null) {
                embed.addField(player.socialMedia[2].name, player.socialMedia[2].link)
            }

            if (player.socialMedia[3] != undefined || player.socialMedia[3] != null) {
                embed.addField(player.socialMedia[3].name, player.socialMedia[3].link)
            }

            if (player.socialMedia[4] != undefined || player.socialMedia[4] != null) {
                embed.addField(player.socialMedia[4].name, player.socialMedia[4].link)
            }

            if (player.socialMedia[5] != undefined || player.socialMedia[5] != null) {
                embed.addField(player.socialMedia[5].name, player.socialMedia[5].link)
            }

            if (player.socialMedia[6] != undefined || player.socialMedia[6] != null) {
                embed.addField(player.socialMedia[6].name, player.socialMedia[6].link)
            }

            message.channel.send(embed)

        }).catch(e => {
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                message.channel.send('I could not find that player in the API. Check spelling and name history.')
            } else {
                message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
            }       
        });
    }
}
