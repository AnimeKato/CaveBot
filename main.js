const { PREFIX, TOKEN } = require('./config.json');
const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client();
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.once('ready', () => {
	console.log('logged in');
	client.user.setActivity('over the page | \\repo', { type: 'WATCHING' });});

client.on('message', (message) => {

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Handler threw an error: `command not executable outside guilds!`');}

	if (command.args && !args.length) {
		return message.channel.send('Handler threw an error: `not enough arguments passed!`');
	}

	if (!command) return;

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send('Handler threw an error: `unknown error.`');
	}
});
client.login(TOKEN);
