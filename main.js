const { PREFIX, TOKEN } = require('./config.json');
const discord = require('discord.js');
const client = new discord.Client();

client.once('ready', () => {
	console.log('logged in');
});
client.on('message', (message) => {

	if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	const args = message.content.slice(PREFIX.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	client.user.setActivity('over the page | \\repo', { type: 'WATCHING' });

	if(message.content === '\\bing') {
		message.channel.send('bong');}

	else if (message.content.toLowerCase() === '\\bip') {
		message.channel.send('bop');}

	else if (message.content.toLowerCase() === '\\repo') {
		return message.channel.send('https://github.com/AnimeKato/shitcord-bot/');}

	else if (message.content === `${PREFIX}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);}

	else if (message.content === `${PREFIX}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);}

	else if (command === 'inv') {
		if (!args.length) {
			return message.channel.send(`${message.author}: Valid args: \`shitpage\``);
		}
		else if (args[0] === 'shitpage') {
			return message.channel.send('discord.gg/4nh2SX7');}
	}
});
client.login(TOKEN);