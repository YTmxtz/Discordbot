
var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: true,
  },
})
module.exports = {
    name: 'image',
    aliases: ['googlesearch'],
    cooldown: '10',
    description: "embed",
   async execute(message,args, cmd, client, Discord){

const image_query = args.join('')
if(!image_query) return message.channel.send('please enter an image name')
const image_result = await google.scrape(image_query, 1);
message.channel.send(image_result[0].url);
   }
}