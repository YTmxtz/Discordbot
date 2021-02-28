

module.exports = {
    name: 'epicgamerrate',
    aliases: ['egr',],
    description: "embed",
  
    
    

    execute(message,args, cmd, client, Discord){
        const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**Epic gamer rate Machine**')
        .addFields({name: 'your epic gamer rate is:', value: '100% :sunglasses:',})
        .setFooter('');

        if(message.author.id === "755136326977847439") return message.channel.send(embed)
        if(message.author.id === "708284338122522765") return message.channel.send(embed)
        var egrtitle = "Your epicgamerrate is:"
var suffixegr = '%  :sunglasses:';
var egr = (Math.floor(Math.random() * 101));
var egrvt = egr + suffixegr;

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('**Epic gamer rate Machine**')
        .addFields({name: egrtitle , value: egrvt,})
        .setFooter('');

        message.channel.send(newEmbed);

    }
}