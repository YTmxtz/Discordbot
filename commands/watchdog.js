const Discord = require('discord.js');
const { color, footer } = require('../lib/embed.json')
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client('6585a2ef-b383-41d0-8184-31f92798f206');
const commaNumber = require('comma-number');

module.exports = {
    name: 'watchdog',
    aliases: [ "wdr" ],
    execute(message,args, cmd, client, Discord) {
        hypixelAPIReborn.getWatchdogStats().then((stats) => {
            const watchdogStatsEmbed = new Discord.MessageEmbed()
                .setTitle('Watchdog Stats')
                .setColor(color)
                .setFooter(footer, 'https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')
                .addField('Total Watchdog bans:', commaNumber(stats.byWatchdogTotal), true)
                .addField('Total staff bans', commaNumber(stats.byStaffTotal), true)

            message.channel.send(watchdogStatsEmbed);

        });

    }
}
