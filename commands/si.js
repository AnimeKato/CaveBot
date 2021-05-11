const discord = require("discord.js");
module.exports = {
	name: 'si',
    	guildOnly: true,
  description: "Print server information"
  aliases: ['serverinfo'],
execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);}
};
