
module.exports = {
    name: 'gayrate',
    aliases: ['gr'],
    description: "embed",
  

    execute(message,args, cmd, client, Discord){
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**Gayrate Machine**')
        .addFields({name: 'gay rate is:', value: '0%',})
        .setFooter('');

        if(message.author.id === "755136326977847439") return message.channel.send(embed)
        if(message.author.id === "708284338122522765") return message.channel.send(embed)
        var gaytitle = "Your gayrate is:"
var suffixgay = '%  :rainbow_flag:';
var gay = (Math.floor(Math.random() * 101));
var gayvt = gay + suffixgay;


        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**Gayrate Machine**')
        .addFields({name: gaytitle , value: gayvt,})
        .setFooter('');

        message.channel.send(newEmbed);

    }
}