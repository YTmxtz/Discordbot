

module.exports = {
    name: 'hotrate',
    aliases: ['htr', 'hot'],
    description: "embed",
  

    execute(message,args, cmd, client, Discord){
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**Hotrate Machine**')
        .addFields({name: 'Hotrate is:', value: '100% :smirk:',})
        .setFooter('');
        if(message.author.id === "755136326977847439") return message.channel.send(embed)
        if(message.author.id === "708284338122522765") return message.channel.send(embed)
        var hottitle = "your Hotrate is:"
var suffixhot = '%  :smirk:';
var hot = (Math.floor(Math.random() * 101));
var hotvt = hot + suffixhot;

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**Hotrate Machine**')
        .addFields({name: hottitle , value: hotvt,})
        .setFooter('');

        message.channel.send(newEmbed)

    }
}