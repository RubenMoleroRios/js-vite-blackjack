/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Es un array de string
 * @returns {Array<String>} Devuelve una carta en específico
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}