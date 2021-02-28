const queries  = ["hotend73", "slimstory57", "jazzywhite63"]
const randQueries = queries[Math.floor(Math.random() * queries.length)]

module.exports = {
    name: 'hack',
    
    cooldown: '30',
    description: "embed",
    execute(message,args, cmd, client, Discord){
        const fs = require('fs');
        const data = fs.readFileSync('ip.txt', 'UTF-8');
        const lines = data.split(/\r?\n/);
        const random = lines[Math.floor(Math.random() * lines.length)];
        
        
    
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(message.content.includes('@')) {
        message.channel.send(`hacking ${user}`).then( msg => {
            setTimeout(function(){
              msg.edit('processing 13%')
            }, 3000);
            setTimeout(function(){
                msg.edit(`got his ip ${random}`)
              }, 6000); // this will wait 1 minute
            setTimeout(function(){
                msg.edit('processing 39%')
              }, 9000);
            setTimeout(function(){
                msg.edit('processing 56%')
              }, 12000);
            setTimeout(function(){
                msg.edit(`got his discord password: ${randQueries}`)
              }, 15000);
            setTimeout(function(){
                msg.edit('done!')
            }, 17000)
        })

        } else(

        
                message.channel.send(`hacking ${message.author.username}`).then( msg => {
                    setTimeout(function(){
                      msg.edit('processing 13%')
                    }, 3000);
                    setTimeout(function(){
                        msg.edit(`got your ip: ${random}`)
                      }, 6000); // this will wait 1 minute
                    setTimeout(function(){
                        msg.edit('processing 39%')
                      }, 9000);
                    setTimeout(function(){
                        msg.edit('processing 56%')
                      }, 12000);
                    setTimeout(function(){
                        msg.edit(`got your discord password: ${randQueries}`)
                      }, 15000);
                    setTimeout(function(){
                        msg.edit('done!')
                    }, 17000)
                
    
    
                
        
             
                
                  

                
        }));
        //                                                      ^m  ^^s  ^^^^ms
       
        
    
    }
}
