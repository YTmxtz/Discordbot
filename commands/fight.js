const fights = require('../data/fights.json');
module.exports = {
    name: 'fight',
    description: '',
    execute(message,args, cmd, client, Discord){
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('You can\'t fight thin air dude, pick someone to fight.');
  if(message.mentions.users.first().id === "755136326977847439") return message.reply('***It dealt ∞ damage. You got demolished.*** Mxtz won');
  
      message.channel.send(`${message.author.username} is fighting ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
  }
}