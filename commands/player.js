
const fetch = require('node-fetch');
const { color, footer } = require('../lib/embed.json')
const { apikey } = require('../lib/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'hypixelstats',
    description: '',
    execute(message,args, cmd, client, Discord){
        hypixelAPIReborn.getPlayer(args[0], { guild: true }).then(async (player) => {
            const playerUUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
            const playerUUIDData = await playerUUID.json();

            playerIsOnline = "";

            if (!player.isOnline) {
                playerIsOnline = "Offline"
            }

            if (player.isOnline) {
                playerIsOnline = "Online"
            }

            playerMinecraftVersion = "";

            if (player.mcVersion == null) {
                playerMinecraftVersion = "Unknown";
            }

            if (player.mcVersion != null) {
                playerMinecraftVersion = player.mcVersion;
            }

            playerRank = "";

            if (player.rank == 'Default') {
                playerRank = "None";
            }

            if (player.rank != 'Default') {
                playerRank = player.rank;
            }

            const firstLDate = new Date(player.firstLogin);
            const lastLDate = new Date(player.lastLogin);

            const firstL = firstLDate.toLocaleString()
            const lastL = lastLDate.toLocaleString()

            const playerInfoEmbed = new Discord.MessageEmbed()
                .setTitle('Player Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setThumbnail(`https://visage.surgeplay.com/face/256/${playerUUIDData.id}.png`)
                .addField('Rank:', `\`${playerRank}\``, true)
                .addField('Level:', player.level, true)
                .addField('Karma:', commaNumber(player.karma), true)

            if (player.guild != null) {
                playerInfoEmbed.addField('Guild:', player.guild.name)
            }
            
                playerInfoEmbed.addField('Main MC Version:', playerMinecraftVersion, true)
                playerInfoEmbed.addField('First Login:', (firstL))
                playerInfoEmbed.addField('Last Login:', (lastL))
                playerInfoEmbed.addField('Status:', playerIsOnline, true)

            if (player.rank.includes('MVP+')) {
                if (player.plusColor == null) {
                    playerInfoEmbed.addField('Plus Color:', 'Red')
                } else {
                    playerInfoEmbed.addField('Plus Color:', player.plusColor)
                }
            }

                playerInfoEmbed.addField('Social Media:', `Run \`,socials ${player.nickname}\``)
                playerInfoEmbed.setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

            message.channel.send(playerInfoEmbed);
        }).catch(e => {
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                message.channel.send('I could not find that player in the API. Check spelling and name history.')
            } else {
                message.channel.send('An error has occurred. pls dm Mxtz')
                console.log(console.error());
                
            }       
        });
    }
}