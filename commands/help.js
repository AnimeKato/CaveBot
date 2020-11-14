module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['h'],
	execute(message) {
		message.channel.send('Command info and list (that may not exist cause Kat is lazy): https://github.com/AnimeKato/shitcord-bot/blob/main/README.md#command-info-and-list');
	},
};