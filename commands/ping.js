module.exports = {
    name: 'ping',
    description: "this is a ping cmd",
execute(message,args, cmd, client, Discord){
    message.react('<a:6093_Animated_Checkmark:808266934055338024>')
             const embed = new Discord.MessageEmbed()
            .setTitle(':ping_pong: Pong!')
            .setColor('RANDOM')
            .setDescription(`Latency is ${Date.now() - message.createdTimestamp}ms.`); 

        message.channel.send(embed)              
    }
    }

