
const HangmanGame = require('./hangman');
const Discord = require('discord.js');
const client = new Discord.Client
const hangman = new HangmanGame(client);

module.exports = {
    name: 'hangman',
    aliases: ['hangman-game'],
    description: "embed",
    execute(message,args, cmd, client, Discord){
       
        hangman.newGame(message);
    }
}
