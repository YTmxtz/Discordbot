
module.exports = {
    name: 'stankrate',
    description: "embed",
  

    execute(message,args, cmd, client, Discord){
        var stanktitle = "your stankrate is:"
        const embed = new Discord.MessageEmbed()
       
        .setTitle('**Stankrate Machine**')
        .addFields({name: 'your stank rate is:', value: '0% ur clean',})
        .setFooter('');
        if(message.author.id === "755136326977847439") return message.channel.send(embed)
        if(message.author.id === "708284338122522765") return message.channel.send(embed)
var suffixstank = '%  :mask:';
var Stank = (Math.floor(Math.random() * 101));
var stankvt = Stank + suffixstank;

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**Stankrate Machine**')
        .addFields({name: stanktitle , value: stankvt,})
        .setFooter('');

        message.channel.send(newEmbed);

    }
}