module.exports = {
	name: 'si',
    	guildOnly: true
	description: 'server info',
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);}
};
