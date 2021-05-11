const discord = require("discord.js");
module.exports = {
	name: 'ui',
	description: 'Print user info',
  aliases: ['userinfo'],
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);}
};
