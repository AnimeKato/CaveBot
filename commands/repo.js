const discord = require("discord.js");
module.exports = {
	name: 'repo',
	description: 'link to bot\'s github repo',
	execute(message) {
		message.channel.send('https://github.com/AnimeKato/shitcord-bot/');}
};
