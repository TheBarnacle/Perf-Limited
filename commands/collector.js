// Commande collector :
// collecte les réactions, et renvoie la réaction correspondante. 
// Ensuite, ajoute le joueur à la liste de session correspondante, lui envoie un message direct,
// puis crée une session si besoin.
// Plusieurs "print" de test modulables

module.exports = {
	name: 'collector',
    description: 'Collect reacts to message',
    // Gestion des droits pour utiliser la commande
    clientPermissions: ['ADMINISTRATOR'],
	execute(message, args, slots) {
        const subscribe = require('../subscribe.js');
        const create_session = require('../create_session.js');
        const getback = require('../getback.js');
        const remove_ins = require('../remove_ins.js');

        //console.log(`Verif${slots}not ok`);
        // On récupère la réaction

		const filter = (reaction) => {
        switch(reaction.emoji.name){
            case '👍':
                console.log("lundi aprem");
                return reaction.emoji.name === '👍';
            case '🌝':
                console.log("lundi soir");
                return reaction.emoji.name === '🌝';
            case '👎':
                console.log("mardi aprem");
                return reaction.emoji.name === '👎';
            case '🌖':
                console.log("mardi soir");
                return reaction.emoji.name === '🌖';
            case '🎮':
                console.log("mercredi aprem");
                return reaction.emoji.name === '🎮';
            case '🌗':
                console.log("mercredi soir");
                return reaction.emoji.name === '🌗';
            case '🎬':
                console.log("jeudi aprem");
                return reaction.emoji.name === '🎬';
            case '🌘':
                console.log("jeudi soir");
                return reaction.emoji.name === '🌘';
            case '🎳':
                console.log("vendredi aprem");
                return reaction.emoji.name === '🎳';
            case '🌚':
                console.log("vendredi soir");
                return reaction.emoji.name === '🌚';
            case '🎱':
                console.log("samedi aprem");
                return reaction.emoji.name === '🎱';
            case '🌒':
                console.log("samedi soir");
                return reaction.emoji.name === '🌒';
            case '🎰':
                console.log("dimanche aprem");
                return reaction.emoji.name === '🎰';
            case '🌓':
                console.log("dimanche soir");
                return reaction.emoji.name === '🌓';
        }
        };

        // Période de temps sur laquelle le bot va travailler : à adapter pour tenir une semaine.
        // On autorise le bot à gérer les entrées et les sorties
        // Attention : temps en millisecondes
        const collector = message.createReactionCollector(filter, { dispose: true, time: 604800000 });

        collector.on('collect', (reaction, user) => {
            console.log(`${user.tag} reacted with ${reaction.emoji.name}.`);
            //message.channel.send(`${user}, you reacted with ${reaction.emoji.name}`);
            
            let guy = reaction.users.cache;
            // console.log(guy);

            let tmp = `${user}`;
            let reac = `${reaction.emoji.name}`;

            // On ajoute le joueur à la session correspondante
            let schedule = subscribe(reac, slots, tmp);
            console.log (`numéro de la session ${schedule}`)

            // On récupère l'id de la session, et si besoin, on crée un message de check-in dans le salon adapté

            create_session(slots, schedule, message);
            console.log(`Réaction ajoutée : ${slots.monday_a}`);
            //message.channel.send(`${tmp}, you are in`);

            // On envoie un message de confirmation à la personne qui s'est inscrite
            user.send("Bonjour, \n \n Nous vous confirmons votre inscription à un Pod Draft sur Perf Limité. Vous recevrez un message de confirmation une fois la session complétée.");

        });

        // Partie qui gère si l'utilisateur enlève sa réaction pour le supprimer des listes
        // D'abord checker dans la console si collector remove fonctionne
        collector.on('remove', (reaction, user) => {
            console.log(`L'emoji ${reaction.emoji.name} a été retiré.`);

            let tmp_2 = `${user}`;
            let reac_2 = `${reaction.emoji.name}`;

            // On retrouve la session qui correspond à l'emoji retiré
            let schedule_2 = getback(reac_2);

            // On retire la personne de la liste correspondante
            remove_ins(slots, schedule_2, tmp_2);
            console.log(slots.monday_a);
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} items`);
        });
	},
};