const Canvas =require('canvas')

module.exports = {
    name: 'jail',
    aliases: ['bar'],
    description: "embed",
    

   async execute(message,args, cmd, client, Discord){
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.channel.send('please mention someone');
const canvas = Canvas.createCanvas(400, 400);

const ctx = canvas.getContext('2d');
const jail = await Canvas.loadImage('./lib/jail.png');





let user = message.mentions.users.first();
const background1 = await Canvas.loadImage(user.displayAvatarURL({ format: 'png'}));
ctx.drawImage(background1, 0, 0, canvas.width, canvas.height);
ctx.drawImage(jail, 0, 0, canvas.width, canvas.height);
const attachment2 = new Discord.MessageAttachment(canvas.toBuffer(), 'example.png');


if(message.mentions.users.first) return message.channel.send(attachment2);





    }
}