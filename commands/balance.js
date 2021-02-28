
module.exports = {
    name: 'balance',
    aliases: ['bal'],
    description: "embed",
    async execute(message,args, cmd, client, Discord, profileData){
        message.react('<a:6093_Animated_Checkmark:808266934055338024>')
        .then((channel) => {
        message.channel.send(`your wallet is ${profileData.coins}, your banks ballance is ${profileData.bank}`);
        });
        }
    
        
}