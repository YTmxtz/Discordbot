
module.exports = {
    name: 'helpfun',
    aliases: ['funhelp', 'hf', 'fh'],
    description: "embed",
    execute(message,args, cmd, client, Discord){
        message.react('<a:6093_Animated_Checkmark:808266934055338024>')
        .then((channel) => {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .addFields(
            {name: "fun commands:" , value:'`,nitro`  `,ascii` `,rps` `,snake` `,hangman` `,epicgamerrate` `,meme` `,gayrate` `,iq` `,hack` `,image` `,stankrate` `,8ball` `,dadjoke` `,fight` `,calc` `,copypasta` `,roast` `,textflip` `,ship` `compliment`'},
        )
        .setFooter('Uber bot','https://cdn.discordapp.com/avatars/793214488752554026/f4cbb9b7cf8f5ae86da30d7ca15ccf24.webp?size=4096')
        .setTimestamp();

        message.channel.send(newEmbed);
        
        })
    }
}