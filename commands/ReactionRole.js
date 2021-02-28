module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message,args, cmd, client, Discord) {
        const channel = 'YOUR_CHANNEL';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Bot");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Member");
 
        const yellowTeamEmoji = '✅';
        const blueTeamEmoji = '✔️';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Verify!')
            .setDescription('Click one of the 2 emojis to verify\n\n'
                + `${yellowTeamEmoji}to verify \n`
                + `${blueTeamEmoji} to verify`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   