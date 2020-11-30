module.exports = {
	name: 'avatar',
	description: 'get your avatar',
	aliases: ['av'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);}}
};