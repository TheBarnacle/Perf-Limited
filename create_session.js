"use strict";

const create_session= function(slots, schedule, message){

    let ch_id = '765127907609280532';
    let target = message.guild.channels.cache.get(ch_id)

    switch(schedule){
        case "monday_a":
            if(slots.monday_a.length == 2){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Lundi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.monday_a[0]);
                //if(typeof(slots.monday_a[1]) !== 'undefined')
            // aller jusqu'à 8 slots une fois les tests finis
            }
        case "monday_n":
            if(slots.monday_n.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Lundi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.monday_n[0]);
            }
        case "tuesday_a":
            if(slots.tuesday_a.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mardi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.tuesday_a[0]);
            }
        case "tuesday_n":
            if(slots.tuesday_n.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mardi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.tuesday_n[0]);
            }
        case "wednesday_a":
            if(slots.wednesday_a.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mercredi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.wednesday_a[0]);
            }
        case "wednseday_n":
            if(slots.wednesday_n.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mercredi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.wednesday_n[0]);
            }
        case "thursday_a":
            if(slots.thursday_a.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Jeudi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.thursday_a[0]);
            }
        case "thursday_n":
            if(slots.thursday_n.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Jeudi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.thursday_n[0]);
            }
        case "friday_a":
            if(slots.friday_a.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Vendredi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.friday_a[0]);
            }
        case "friday_n":
            if(slots.friday_n.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Vendredi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.friday_n[0]);
            }
        case "saturday_a":
            if(slots.saturday_a.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Samedi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.saturday_a[0]);
            }
        case "saturday_n":
            if(slots.saturday_n.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Samedi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.saturday_n[0]);
            }
        case "sunday_a":
            if(slots.sunday_a.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Dimanche prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.sunday_a[0]);
            }
        case "sunday_n":
            if(slots.sunday_n.length == 1){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Dimanche prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.sunday_n[0]);
            }

        }


    
    //console.log(`Session temporaire : ${schedule}`);
    //console.log(slots.monday_a);
    //if(slots..length == 2){
//        console.log("session pleine");
        //message.channel.send("Session initialisée : ".$slots[0].$slots[1]);
    //}

};

module.exports = create_session;