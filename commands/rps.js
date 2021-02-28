module.exports = {
    name: 'rps',
    description: "embed",
    execute(message,args, cmd, client, Discord){
const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];
        const ans = 'I had '

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`,rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        
        if (result === choice) return message.reply(`${ans +  result} too so its a tie! We had the same choice.`);
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply(`${ans +  result} I won!`);
                else return message.reply(`${ans +  result} you won!`);
            }
            case 'paper': {
                if (result === 'scissors') return message.reply(`${ans +  result} I won!`);
                else return message.reply(`${ans +  result} you won!`);        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply(`${ans +  result} I won!`);
                else return message.reply(`${ans +  result} you won!`);
            }
            default: {
                message.react('<a:6764_no:810969842484117546>')
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``), message.react('<a:6764_no:810969842484117546>');
            }

        }
    }
}