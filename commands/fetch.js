const { slots } = require('../bot.js');

module.exports = {
	
	name: 'fetch',
	description: '',
	execute() {
		
		console.log("affichage :" + `${slots}`);
	},
};

//mettre en fonction pour ajouter dans les listes définies par setup_slots