
const { color, footer } = require('../lib/embed.json')
const { apikey } = require('../lib/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'duels',
    execute(message,args, cmd, client, Discord) {
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setColor(color)
                .addField(',duels', '`,duels` lets you see duels stats about a player.')
                .addField('Usage', '`,duels classic` \n`,duels uhc`\n`,duels skywars`\n`,duels bridge`\n`,duels sumo`\n`,duels op`\n`,duels combo`')
                .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/Duels-64.png')

            message.channel.send(embed);

        }

        if (args[0] == 'classic') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Classic Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', commaNumber(player.stats.duels.classic.kills))
                    .addField('Losses:', commaNumber(player.stats.duels.classic.losses))
                    .addField('Deaths:', commaNumber(player.stats.duels.classic.deaths))
                    .addField('Wins:', commaNumber(player.stats.duels.classic.wins))
                    .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred.')
                }       
            });
        } 

        if (args[0] == 'uhc') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('UHC Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', commaNumber(player.stats.duels.uhc.v1.kills))
                    .addField('Losses:', commaNumber(player.stats.duels.uhc.v1.losses))
                    .addField('Deaths:', commaNumber(player.stats.duels.uhc.v1.deaths))
                    .addField('Wins:', commaNumber(player.stats.duels.uhc.v1.wins))
                    .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred.')
                }       
            });
        }

        if (args[0] == 'skywars' || args[0] == 'sw') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Skywars Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', commaNumber(player.stats.duels.skywars.v1.kills))
                    .addField('Losses:', commaNumber(player.stats.duels.skywars.v1.losses))
                    .addField('Deaths:', commaNumber(player.stats.duels.skywars.v1.deaths))
                    .addField('Wins:', commaNumber(player.stats.duels.skywars.v1.wins))
                    .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred.')
                }       
            });
        }

        if (args[0] == 'bridge') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('The Bridge Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', commaNumber(player.stats.duels.bridge.v1.kills))
                    .addField('Losses:', commaNumber(player.stats.duels.bridge.v1.losses))
                    .addField('Deaths:', commaNumber(player.stats.duels.bridge.v1.deaths))
                    .addField('Wins:', commaNumber(player.stats.duels.bridge.v1.wins))
                    .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred.')
                }       
            });
        }

        if (args[0] == 'sumo') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Sumo Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', commaNumber(player.stats.duels.sumo.kills))
                    .addField('Losses:', commaNumber(player.stats.duels.sumo.losses))
                    .addField('Deaths:', commaNumber(player.stats.duels.sumo.deaths))
                    .addField('Wins:', commaNumber(player.stats.duels.sumo.wins))
                    .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred.')
                }       
            });
        }

        if (args[0] == 'op') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('OP Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', commaNumber(player.stats.duels.op.v1.kills))
                    .addField('Losses:', commaNumber(player.stats.duels.op.v1.losses))
                    .addField('Deaths:', commaNumber(player.stats.duels.op.v1.deaths))
                    .addField('Wins:', commaNumber(player.stats.duels.op.v1.wins))
                    .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred.')
                }       
            });
        }

        if (args[0] == 'combo') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Combo Duels Stats')
                    .setColor(color)
                    .addField('Kills:', commaNumber(player.stats.duels.combo.kills))
                    .addField('Losses:', commaNumber(player.stats.duels.combo.losses))
                    .addField('Deaths:', commaNumber(player.stats.duels.combo.deaths))
                    .addField('Wins:', commaNumber(player.stats.duels.combo.wins))
                    .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred.')
                }       
            });
        }

    }
}