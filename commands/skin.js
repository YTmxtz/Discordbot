const mojangjs = require('mojangjs');
const { isValidNickname } = require('../lib/dispixelutil');

module.exports = {
    name: 'skin',
    description: '',
    execute(message,args, cmd, client, Discord){
		if (args.length !== 1) {
			return message.reply(
				'You must only provide a username after this command.'
			);
		}

		const nickname = args[0];

		if (!isValidNickname(nickname)) {
			return message.reply(
				'The username is too long, Minecraft usernames can only be 16 characters'
			);
		}

		mojangjs
			.getUUID(nickname)
			.then(uuid => {
				console.log(uuid);
				message.channel.send(
					new Discord.MessageEmbed()
						.setTitle(`${nickname}'s Skin`)
						.addField(`${nickname}'s UUID`, uuid)
						.setImage(`https://visage.surgeplay.com/full/${uuid.toString()}`)
				);
			}).catch(console.error);
	},
};