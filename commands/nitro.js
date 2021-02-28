module.exports = {
    name: 'nitro',
    aliases: ['nitro gen', 'nitro generator'],
    cooldown: '30',
    description: "embed",
    execute(message,args, cmd, client, Discord){
        const fs = require('fs');
        const data = fs.readFileSync('codes.txt', 'UTF-8');
        const lines = data.split(/\r?\n/);
        const random = lines[Math.floor(Math.random() * lines.length)];

        message.channel.send('generating your code').then( msg => {
            setTimeout(function(){
              msg.edit('processing 13%')
            }, 3000);
            setTimeout(function(){
                msg.edit('processing 20%')
              }, 6000); // this will wait 1 minute
            setTimeout(function(){
                msg.edit('processing 39%')
              }, 9000);
            setTimeout(function(){
                msg.edit('processing 56%')
              }, 12000);
            setTimeout(function(){
                msg.edit('processing 56%')
              }, 15000);
            setTimeout(function(){
                msg.edit('processing 77%')
              }, 15000);
            setTimeout(function(){
                msg.edit('processing 93%')
              }, 17000);
              setTimeout(function(){
                msg.edit('processing 100%')
                
              }, 19000);
            setTimeout(function(){
                msg.edit('check your dm')
                
              }, 19000);
            setTimeout(function(){
                message.author.send(random)
              }, 20000);
            
          });
        //                                                      ^m  ^^s  ^^^^ms
       
        
    
    }
}
