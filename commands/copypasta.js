const copypastas = require('../data/copypastas.json');
module.exports = {
    name: 'copypasta',
    description: 'get information about a minecraft server',
    execute(message,args, cmd, client, Discord){
    args = args.join(" ");
    message.channel.send(`${copypastas[Math.floor(Math.random() * copypastas.length)]}`);
}
}