module.exports = {
    name: 'command',
    description: "embed",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Rules')
        .setDescription('The rules are:')
        .addFields(
            {name: 'Rule 1', value: 'be nice'},
            {name: 'Rule 2', value: 'Dont discriminate'},
            {name: 'Rule 3', value: 'be respect each other'},
            {name: 'Rule 4', value: 'Follow the rules'},
        )
        .setFooter('if you dont follow the rules you get banned');

        message.channel.send(newEmbed);

    }
}
