

module.exports = {
    name: 'iq',
    description: "embed",
  

    execute(message,args, cmd, client, Discord){
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**IQ Machine**')
        .addFields({name: 'your iq is:', value: '150 :brain:',})
        .setFooter('');

        if(message.author.id === "755136326977847439") return message.channel.send(embed)
        if(message.author.id === "708284338122522765") return message.channel.send(embed)
        var iqtitle = "Your iq is:"
var suffixiq = '  :brain:';
var iq = (Math.floor(Math.random() * 151));
var iqvt = iq + suffixiq;

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**IQ Machine**')
        .addFields({name: iqtitle , value: iqvt,})
        .setFooter('');

        message.channel.send(newEmbed);

    }
}