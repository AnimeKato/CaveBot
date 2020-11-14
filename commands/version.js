module.exports = {
	name: 'version',
	description: 'display bot\'s version info',
	aliases: ['ver'],
	execute(message) {
		message.channel.send('Bot version: BETA2.1.1');}
};