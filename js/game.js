const grid = document.querySelector('.grid');


const character = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',

];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;

}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundimage = `url('../images/${character}.png')`;


    card.appendChild(front);
    card.appendChild(back);

    return card;

}

const loadGame = ()=> {

    const duplicateCharacters = [...characters];

    cards.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);



    });
}

loadGame()

