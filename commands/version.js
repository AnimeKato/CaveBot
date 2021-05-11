const discord = require("discord.js");
module.exports = {
	name: 'version',
	description: 'display bot\'s version info',
	aliases: ['ver'],
	execute(message) {
		message.channel.send('Bot version: 2.1.2-BETA');}
};
