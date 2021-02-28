const SnakeGame = require('./snake');
const Discord = require('discord.js');
const client = new Discord.Client
const snakeGame = new SnakeGame(client);

module.exports = {
    name: 'snake',
    aliases: ['snakegame'],
    description: "embed",
    execute(message,args, cmd, client, Discord){
       
snakeGame.newGame(message);
    }
}
