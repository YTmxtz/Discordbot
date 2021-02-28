module.exports = {
    name: 'ban',
    description: "This command kicks a member!",
    execute(message,args, cmd, client, Discord){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don\'t have permission to run this command"), message.react('<a:6764_no:810969842484117546>');
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            if(target.id === "755136326977847439") return message.react('<a:6764_no:810969842484117546>'), message.channel.send(`You cant ban my owner!`);
            
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.react('<a:6764_no:810969842484117546>')
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}