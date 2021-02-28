module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message,args, cmd, client, Discord){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don\'t have permission to run this command"), message.react('<a:6764_no:810969842484117546>');
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            if(target.id === "755136326977847439") return message.react('<a:6764_no:810969842484117546>'), message.channel.send(`You cant ban my owner!`);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`), message.react('<a:6764_no:810969842484117546>');
        }
    }
}