const dadjoke = require('../data/dadjoke.json');
module.exports = {
    name: 'dadjoke',
    description: '',
    execute(message,args, cmd, client, Discord){
        args = args.join(" ");
    message.channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`);
    }
}