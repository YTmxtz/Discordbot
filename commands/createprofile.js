module.exports = {
    name: 'createprofile',
    aliases: ['start'],
    description: "embed",
    execute(message,args, cmd, client, Discord){
        message.channel.send('profile created!')
    }
}