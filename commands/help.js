module.exports = {
	name: 'help',
	description: 'link to help in github repo',
	aliases: ['h'],
	execute(message) {
		message.channel.send('Command info and list (that may not exist cause Kat is lazy): https://github.com/AnimeKato/shitcord-bot/blob/main/README.md#command-info-and-list');
	},
};