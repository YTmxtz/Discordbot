module.exports = {
    name: 'avatar',
    aliases: ['av'],
    description: "embed",
    execute(message,args, cmd, client, Discord){

// Import the discord.js-avatgar package.
const avatarEmbed = require('discord.js-avatar');
 
// Call the avatarEmbed method, only the first argument is required.
// * language: Language in which the embedded message will be sent.
avatarEmbed(message, language = 'english');
// And voila now you have an avatar command with embeds!
    }}