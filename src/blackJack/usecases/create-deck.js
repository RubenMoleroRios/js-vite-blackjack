import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} cardTypes Ejemplo: ['C','D','H','S']
 * @param {Array<String>} specialTypes Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Regresa un nuevo deck de cartas
 */
export const crearDeck = (cardTypes, specialTypes) => {

    if(!cardTypes || cardTypes.length === 0) throw new Error('cardTypes es obligatorio como un array de string');
    if(!specialTypes || specialTypes.length === 0) throw new Error('specialTypes es obligatorio como un array de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of cardTypes ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of cardTypes ) {
        for( let esp of specialTypes ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck;