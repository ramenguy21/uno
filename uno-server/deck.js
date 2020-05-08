let deck = []

const suits = ["red", "green", "blue", "yellow"]

function CreateDeck() {
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 13; x++) {
            switch (x) {
                case (0):
                    var card = { suit: suits[y], value: x }
                    deck.push(card)
                    break;
                case (10):
                    for (let i = 0; i < 2; i++) {
                        var card = { suit: suits[y], value: "Draw Two" }
                        deck.push(card)
                    }
                    break;
                case (11):
                    for (let i = 0; i < 2; i++) {
                        var card = { suit: suits[y], value: "Reverse" }
                        deck.push(card)
                    }
                    break;
                case (12):
                    for (let i = 0; i < 2; i++) {
                        var card = { suit: suits[y], value: "Skip" }
                        deck.push(card)
                    }
                    break;
                default:
                    for (let i = 0; i < 2; i++) {
                        var card = { suit: suits[y], value: x }
                        deck.push(card)
                    }
            }
        }
    }

    for (let j = 0; j < 4; j++) {
        var card1 = { suit: "wild", value: "Wild" }
        var card2 = { suit: "wild", value: "Draw Four" }
        deck.push(card1, card2);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(deck)
    return(deck)
}

export default CreateDeck;