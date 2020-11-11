const conf = require('./config.json');
const discord = require('discord.js');
const client = new discord.Client();

client.on('message', async message => {
	client.user.setActivity('over the page | prefix \\', {
		type:'WATCHING',
	});

	if(message.content.toLowerCase() === '\\bing') {
		return message.channel.send('bong');}

	if(message.content.toLowerCase() === '\\meaning') {
		return message.channel.send(conf.meaning);}

	if(message.content.toLowerCase() === '\\repo') {
		return message.channel.send('https://github.com/AnimeKato/shitcord-bot/');}

	if (message.content === '\\server') {
		// eslint-disable-next-line no-undef
		message.channel.send('This guild\'s name is:', $(message.guild.name));}});

client.login(conf.token);