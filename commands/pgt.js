const discord = require("discord.js");
module.exports = {
	name: 'pgt',
	description: 'ping-grab-test command',
	args: true,
	guildOnly: true,
	execute(message) {
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You pinged ${taggedUser}. They might be angry now.`);}
};
