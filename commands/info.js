module.exports = {
	name: 'info',
	description: 'Information about the arguments provided.',
	args: true,
	execute(message, args) {
		if (args[0] === 'just') {
			return message.channel.send('be cool');
		}

		
	},
};