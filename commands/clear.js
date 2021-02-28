module.exports = {
    name: 'clear',
    cooldown: '10',
    description: "embed",
   async execute(message,args, cmd, client, Discord){
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don\'t have permission to run this command"), message.react('<a:6764_no:810969842484117546>');
if(!args[0]) return message.reply('Please enter the amount of message that u want to clear');
if(isNaN(args[0])) return message.reply('Please enter a real number');

if(args[0] > 100) return message.reply('i can only delte 100 messages');
if(args[0] < 1) return message.reply('U must delete 1 message');
 
await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
message.channel.bulkDelete(messages);
});







    }
}