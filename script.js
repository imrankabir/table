const board = document.querySelector('#board');
const counter = document.querySelector('#moves');

const emojis = ['🍎', '🍌', '🍇', '🍉', '🍊', '🍓', '🍒', '🥝'];
let flipped = [];

const get = (k, d) => JSON.parse(localStorage.getItem(`flip-${k}`)) ?? d;
const set = (k, v) => localStorage.setItem(`flip-${k}`, JSON.stringify(v));

const match = e => {
    const { cards } = get('cards', {cards: []});
    let { moves } = get('moves', {moves: 0});
    moves++;
    set('moves', {moves});
    counter.textContent = moves;
    const [card1, card2] = flipped;
    if (card1.dataset.emoji === card2.dataset.emoji) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        const { matched } = get('matched', {matched: []});
        const matched1 = card1.dataset.index;
        const matched2 = card2.dataset.index;
        
        matched.push();
        set('matched', {matched});
        flipped = [];
        if (matched.length === cards.length) {
            document.querySelectorAll('.card').forEach(card => {
                card.classList.remove('flipped');
                card.textContent = '';
            });
            set('moves', {moves: 0});
            set('cards', {cards: []});
            set('matched', {matched: []});
            setTimeout(() => alert(`Congratulations! You won in ${moves} moves!`), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
            flipped = [];
        }, 1000);
    }
};

const flip = e => {
    const card = e.target;
    if (flipped.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
        card.classList.add('flipped');
        card.textContent = card.dataset.emoji;
        flipped.push(card);
        if (flipped.length === 2) {
            match();
        }
    }
};

const showMoves = e => {
    const { moves } = get('moves', {moves: 0});
    counter.textContent = moves;
};

const showMatched = e => {
    const { matched } = get('matched', {matched: []});
    console.log(matched);
};

const getCards = e => {
    const cards = [...emojis, ...emojis];
    cards.sort(() => Math.random() - 0.5);
    set('cards', {cards});
    return cards;
};

const displayCards = e => {
    let { cards } = get('cards', {cards: []});
    if (cards.length === 0) {
        cards = getCards();
    }
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.dataset.emoji = emoji;
        card.addEventListener('click', flip);
        board.appendChild(card);
    });
};

(e => {
    showMoves();
    displayCards();
    showMatched();
})();
