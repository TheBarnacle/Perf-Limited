"use strict";

const subscribe = function(reac, slots, tmp){

    let session;

    console.log(reac);
    console.log(tmp);

    switch(reac){
        case '👍':
            slots.monday_a.push(tmp);
            session = `monday_a`;
            break;
        case '🌝':
            slots.monday_n.push(tmp);
            session = `monday_n`;
            break;
        case '👎':
            slots.tuesday_a.push(tmp);
            session = `tuesday_a`;
            break;
        case '🌖':
            slots.tuesday_n.push(tmp);
            session = `tuesday_n`;
            break;
        case '🎮':
            slots.wednesday_a.push(tmp);
            session = `wednesday_a`;
            break;
        case '🌗':
            slots.wednesday_n.push(tmp);
            session = `wednesday_n`;
            break;
        case '🎬':
            slots.thursday_a.push(tmp);
            session = `thursady_a`;
            break;
        case '🌘':
            slots.thursday_n.push(tmp);
            session = `thursday_n`;
            break;
        case '🎳':
            slots.friday_a.push(tmp);
            session = `friday_a`;
            break;
        case '🌚':
            slots.friday_n.push(tmp);
            session = `friday_n`;
            break;
        case '🎱':
            slots.saturday_a.push(tmp);
            session = `saturday_a`;
            break;
        case '🌒':
            slots.saturday_n.push(tmp);
            session = `saturday_n`;
            break;
        case '🎰':
            slots.sunday_a.push(tmp);
            session = `sunday_a`;
            break;
        case '🌓':
            slots.sunday_n.push(tmp);
            session = `sunday_n`;
            break;
        }
    return session;
};

module.exports = subscribe;