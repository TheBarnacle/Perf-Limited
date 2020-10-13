"use strict";

const removeins= function(slots, schedule_2, tmp_2){
let i = 0;

    switch(schedule_2){
        case "monday_a":
            while(i < 8){
                if(slots.monday_a[i] == tmp_2){
                    slots.monday_a.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "monday_n":  
            while(i < 8){
                if(slots.monday_n[i] == tmp_2){
                    slots.monday_n.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "tuesday_a": 
            while(i < 8){
                if(slots.tuesday_a[i] == tmp_2){
                    slots.tuesday_a.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "tuesday_n":    
            while(i < 8){
                if(slots.tuesday_n[i] == tmp_2){
                    slots.tuesday_n.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "wednesday_a":  
            while(i < 8){
                if(slots.wednesday_a[i] == tmp_2){
                    slots.wednesday_a.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "wednseday_n":    
            while(i < 8){
                if(slots.wednesday_n[i] == tmp_2){
                    slots.wednesday_n.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "thursday_a":    
            while(i < 8){
                if(slots.thursday_a[i] == tmp_2){
                    slots.thursday_a.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "thursday_n":  
            while(i < 8){
                if(slots.thursday_n[i] == tmp_2){
                    slots.thursday_n.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "friday_a":   
            while(i < 8){
                if(slots.friday_a[i] == tmp_2){
                    slots.friday_a.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "friday_n":   
            while(i < 8){
                if(slots.friday_n[i] == tmp_2){
                    slots.friday_n.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "saturday_a":    
            while(i < 8){
                if(slots.saturday_a[i] == tmp_2){
                    slots.saturday_a.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "saturday_n":   
            while(i < 8){
                if(slots.saturday_n[i] == tmp_2){
                    slots.saturday_n.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "sunday_a":    
            while(i < 8){
                if(slots.sunday_a[i] == tmp_2){
                    slots.sunday_a.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        case "sunday_n":   
            while(i < 8){
                if(slots.sunday_n[i] == tmp_2){
                    slots.sunday_n.splice(i, 1);
                    break;
                }else{
                    i = i + 1;
                }
            }
        }


    
    //console.log(`Session temporaire : ${schedule}`);
    //console.log(slots.monday_a);
    //if(slots..length == 2){
//        console.log("session pleine");
        //message.channel.send("Session initialisée : ".$slots[0].$slots[1]);
    //}

};

module.exports = removeins;