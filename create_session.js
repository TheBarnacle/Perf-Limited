"use strict";

const create_session= function(slots, schedule, message){

    // Id du channel à changer
    let ch_id = '765127907609280532';
    let target = message.guild.channels.cache.get(ch_id)

    switch(schedule){
        case "monday_a":
            if(slots.monday_a.length == 3{
                // Slot de démo
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Lundi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.monday_a[0], slots.monday_a[1], slots.monday_a[2]);
                slots.monday_a.splice(0, 3);
                //if(typeof(slots.monday_a[1]) !== 'undefined')
            // aller jusqu'à 8 slots une fois les tests finis
            }
        case "monday_n":
            if(slots.monday_n.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Lundi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.monday_n[0], slots.monday_n[1], slots.monday_n[2], slots.monday_n[3], slots.monday_n[4], slots.monday_n[5], slots.monday_n[6], slots.monday_n[7]);
                slots.monday_n.splice(0, 8);
            }
        case "tuesday_a":
            if(slots.tuesday_a.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mardi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.tuesday_a[0], slots.tuesday_a[1], slots.tuesday_a[2], slots.tuesday_a[3], slots.tuesday_a[4], slots.tuesday_a[5], slots.tuesday_a[6], slots.tuesday_a[7]);
                slots.tuesday_a.splice(0, 8);
            }
        case "tuesday_n":
            if(slots.tuesday_n.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mardi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.tuesday_n[0], slots.tuesday_n[1], slots.tuesday_n[2], slots.tuesday_n[3], slots.tuesday_n[4], slots.tuesday_n[5], slots.tuesday_n[6], slots.tuesday_n[7]);
                slots.tuesday_n.splice(0, 8);
            }
        case "wednesday_a":
            if(slots.wednesday_a.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mercredi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.wednesday_a[0], slots.wednesday_a[1], slots.wednesday_a[2], slots.wednesday_a[3], slots.wednesday_a[4], slots.wednesday_a[5], slots.wednesday_a[6], slots.wednesday_a[7]);
                slots.wednesday_a.splice(0, 8);
            }
        case "wednseday_n":
            if(slots.wednesday_n.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Mercredi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.wednesday_n[0], slots.wednesday_n[1], slots.wednesday_n[2], slots.wednesday_n[3], slots.wednesday_n[4], slots.wednesday_n[5], slots.wednesday_n[6], slots.wednesday_n[7]);
                slots.wednesday_n.splice(0, 8);
            }
        case "thursday_a":
            if(slots.thursday_a.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Jeudi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.thursday_a[0], slots.thursday_a[1], slots.thursday_a[2], slots.thursday_a[3], slots.thursday_a[4], slots.thursday_a[5], slots.thursday_a[6], slots.thursday_a[7]);
                slots.thursday_a.splice(0, 8);
            }
        case "thursday_n":
            if(slots.thursday_n.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Jeudi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.thursday_n[0], slots.thursday_n[1], slots.thursday_n[2], slots.thursday_n[3], slots.thursday_n[4], slots.thursday_n[5], slots.thursday_n[6], slots.thursday_n[7]);
                slots.thursday_n.splice(0, 8);
            }
        case "friday_a":
            if(slots.friday_a.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Vendredi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.friday_a[0], slots.friday_a[1], slots.friday_a[2], slots.friday_a[3], slots.friday_a[4], slots.friday_a[5], slots.friday_a[6], slots.friday_a[7]);
                slots.friday_a.splice(0, 8);
            }
        case "friday_n":
            if(slots.friday_n.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Vendredi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.friday_n[0], slots.friday_n[1], slots.friday_n[2], slots.friday_n[3], slots.friday_n[4], slots.friday_n[5], slots.friday_n[6], slots.friday_n[7]);
                slots.friday_n.splice(0, 8);
            }
        case "saturday_a":
            if(slots.saturday_a.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Samedi prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.saturday_a[0], slots.saturday_a[1], slots.saturday_a[2], slots.saturday_a[3], slots.saturday_a[4], slots.saturday_a[5], slots.saturday_a[6], slots.saturday_a[7]);
                slots.saturday_a.splice(0, 8);
            }
        case "saturday_n":
            if(slots.saturday_n.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Samedi prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.saturday_n[0], slots.saturday_n[1], slots.saturday_n[2], slots.saturday_n[3], slots.saturday_n[4], slots.saturday_n[5], slots.saturday_n[6], slots.saturday_n[7]);
                slots.saturday_n.splice(0, 8);
            }
        case "sunday_a":
            if(slots.sunday_a.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Dimanche prochain 15h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.sunday_a[0], slots.sunday_a[1], slots.sunday_a[2], slots.sunday_a[3], slots.sunday_a[4], slots.sunday_a[5], slots.sunday_a[6], slots.sunday_a[7]);
                slots.sunday_a.splice(0, 8);
            }
        case "sunday_n":
            if(slots.sunday_n.length == 8){
                console.log("session pleine");
                target.send("Vous êtes 8 inscrits pour le créneau de Dimanche prochain 20h.\n \nVeuillez confirmer au plus vite votre participation en réagissant à ce poste avec :white_check_mark: \n \nSi vous n'êtes plus disponible, merci de trouver un remplaçant.");
                target.send(slots.sunday_n[0], slots.sunday_n[1], slots.sunday_n[2], slots.sunday_n[3], slots.sunday_n[4], slots.sunday_n[5], slots.sunday_n[6], slots.sunday_n[7]);
                slots.sunday_n.splice(0, 8);
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