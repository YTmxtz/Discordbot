const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});




const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})


client.login('pNzkzMjE0NDg4NzUyNTU0MDI2.X-pAjw.dheGQIb4NClyh2suzKeaykjg66M');

