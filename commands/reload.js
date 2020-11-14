module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	aliases: ['r', 'rl', 'rel'],
	execute(message, args) {
		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
	|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`Command \`${command.name}\` was reloaded!`);
		} catch (error) {
			console.error(error);
			message.channel.send(`There was an error while reloading the command \`${command.name}\`:\n\`${error.message}\``);
		}

		if (!command) return message.channel.send(`No command with name or alias \`${commandName}\` found.`);
	},
};