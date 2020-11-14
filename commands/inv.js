module.exports = {
	name: 'inv',
	description: 'invite command',
	execute(message, args) {
		if (!args.length) {
			message.reply('The invite command. Valid args: `shitpage` `bot`');}

		else if (args[0] === 'shitpage') {
			message.reply('discord.gg/4nh2SX7');}

		else if (args[0] === 'bot') {
			return message.reply('\nAs the bot is not public, you must host the bot yourself. **Please DO NOT host a public version of this bot!!**\n If Kat wants there to be a publicly hosted version of the bot, she will do it herself.\n See https://github.com/AnimeKato/shitcord-bot#hosting-the-bot for more info.');}
	}
};