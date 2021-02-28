module.exports = {
    name: 'vip',
    description: "embed",
    execute(message,args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FCBD00')
        .setTitle('Whats is Vip?')
        .addFields(
            {name: 'What are the adventages?', value: 'With Vip you are able to compete in drops of all sort of accounts / codes!'},
            {name: 'How to get Vip?', value: 'You can boost the server!'},
            {name: 'The other way', value: 'You can invite 5 People'},
        )
        .setFooter('');

        message.channel.send(newEmbed);

    }
}
