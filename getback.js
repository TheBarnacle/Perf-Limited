"use strict";

const getback = function(reac_2){

    let session;

    switch(reac_2){
        case '👍':
            session = `monday_a`;
            break;
        case '🌝':
            session = `monday_n`;
            break;
        case '👎':
            session = `tuesday_a`;
            break;
        case '🌖':
            session = `tuesday_n`;
            break;
        case '🎮':
            session = `wednesday_a`;
            break;
        case '🌗':
            session = `wednesday_n`;
            break;
        case '🎬':
            session = `thursady_a`;
            break;
        case '🌘':
            session = `thursday_n`;
            break;
        case '🎳':
            session = `friday_a`;
            break;
        case '🌚':
            session = `friday_n`;
            break;
        case '🎱':
            session = `saturday_a`;
            break;
        case '🌒':
            session = `saturday_n`;
            break;
        case '🎰':
            session = `sunday_a`;
            break;
        case '🌓':
            session = `sunday_n`;
            break;
        }
    return session;
};

module.exports = getback;