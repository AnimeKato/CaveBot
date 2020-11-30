module.exports = {
	name: 'ui',
	description: 'user info',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);}
};