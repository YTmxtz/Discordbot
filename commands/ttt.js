const TicTacToe = require('discord-tictactoe');
const Discord = require('discord.js');
const yourBot = new Discord.Client();
 
new TicTacToe({
  language: 'en',
  command: ',ttt'
})