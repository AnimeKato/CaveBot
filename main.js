const { PREFIX, TOKEN } = require('./config.json');
const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
	console.log('logged in');
	client.user.setActivity('over the page | \\repo', { type: 'WATCHING' });
});

client.on('message', (message) => {

	if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	const args = message.content.slice(PREFIX.length).trim().split(' ');
	const command = args.shift().toLowerCase();


	if(command === 'bing') {
		message.channel.send('bong');}

	else if (command === 'bip') {
		message.channel.send('bop');}

	else if (command === 'repo') {
		message.channel.send('https://github.com/AnimeKato/shitcord-bot/');}

	else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);}

	else if (command === 'user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);}

	else if (command === 'inv' || command === 'invite') {
		if (args[0] === 'shitpage') {
			message.channel.send('discord.gg/4nh2SX7');}
		else if (args[0] === 'bot') {
			message.channel.send('As the bot is not public, you must host the bot yourself. **Please DO NOT host a public version of this bot!!**\nIf Kat wants there to be a publicly hosted version of the bot, she will do it herself.\nSee https://github.com/AnimeKato/shitcord-bot#hosting-the-bot for more info.');}
		else {
			message.channel.send(`${message.author}: The invite command. Valid args: \`shitpage\` \`bot\``);}
	}
});

client.login(TOKEN);
