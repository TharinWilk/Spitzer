//DOM Selectors
const openingScreen = document.querySelector('#opening-title-screen');
const chooseGameScreen = document.querySelector('#play-title-screen');

const newGameBtn = document.querySelector('#new-game');
const contGameBtn = document.querySelector('#cont-game');
const howToPlay = document.querySelector('#how-to-play');
const oneVOneGame = document.querySelector('#one-v-one');
const backBtn = document.querySelector('#back');

const modal = document.querySelector('.modal');
const modalInstruct = document.querySelector('.modal-instructions');
const btnLeft = document.querySelector('#htp-left');
const btnRight = document.querySelector('#htp-right');
const modalClose = document.querySelector('#htp-close');

const playerCardsFaceUp = document.querySelector('.player-cards-face-up');
const playerCardsInHand = document.querySelector('.player-cards-in-hand');
const playerCardsFaceDown = document.querySelector('.player-cards-face-down');
const playerTrickPile = document.querySelector(".player-trick-pile");
const playerCardPile = document.querySelector("#player-card-pile");
const playerTrickScore = document.querySelector("#player-trick-score");

const computerCardsFaceDown = document.querySelector('.computer-cards-face-down');
const computerCardsInHand = document.querySelector('.computer-cards-in-hand');
const computerCardsFaceUp = document.querySelector('.computer-cards-face-up');
const computerTrickPile = document.querySelector(".computer-trick-pile");
const computerCardPile = document.querySelector("#computer-card-pile");
const computerTrickScore = document.querySelector("#computer-trick-score");

const playedPlayerCard = document.querySelector('.played-player-card');

const trickWinner = document.querySelector('#winner-text');
const trickPoints = document.querySelector('#points-text');

const playerWinsScreen = document.querySelector('#player-wins-screen')
const comWinsScreen = document.querySelector('#com-wins-screen')

const playerScoreCard = document.querySelectorAll('.player-score-card');
const comScoreCard = document.querySelectorAll('.com-score-card');
const nextHandBtn = document.querySelectorAll('.next-hand-btn');
const mainMenuBtn = document.querySelectorAll('.main-menu-btn');
const playerWinsText = document.querySelector('#player-wins-text');
const comWinsText = document.querySelector('#com-wins-text');

// Title Screen Operations

newGameBtn.addEventListener('click', () => {
  openingScreen.classList.add('hidden');
  chooseGameScreen.classList.remove('hidden');
});

oneVOneGame.addEventListener('click', () => {
  chooseGameScreen.classList.toggle('hidden');
  newGame()
})

backBtn.addEventListener('click', () => {
  openingScreen.classList.remove('hidden');
  chooseGameScreen.classList.add('hidden');
});

nextHandBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    continueGame()
  })
});

mainMenuBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    resetCardPiles();
    playerWinsScreen.classList.add('hidden');
    comWinsScreen.classList.add('hidden');
    openingScreen.classList.remove('hidden');
  })
});

howToPlay.addEventListener('click', () => {
  modal.classList.add('modal-active');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-active');
});

let x = 0;

btnLeft.addEventListener('click', () => {
  if(modalInstruct.style.transform != "translateX(0%)") {
    x += 100
    modalInstruct.style.transform = `translateX(${x}%)`;
  }
})

btnRight.addEventListener('click', () => {
  if(modalInstruct.style.transform != "translateX(-400%)") {
    x -= 100
    modalInstruct.style.transform = `translateX(${x}%)`;
  }
})

// Cards
const deck = [
  {
    card: "QC",
    suit: "clubs",
    trump: true,
    points: 3,
    value: 36,
    image: 'https://deckofcardsapi.com/static/img/QC.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "7D",
    suit: "diamonds",
    trump: true,
    points: 0,
    value: 35,
    image: 'https://deckofcardsapi.com/static/img/7D.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "QS",
    suit: "spades",
    trump: true,
    points: 3,
    value: 34,
    image: 'https://deckofcardsapi.com/static/img/QS.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "QH",
    suit: "hearts",
    trump: true,
    points: 3,
    value: 33,
    image: 'https://deckofcardsapi.com/static/img/QH.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "QD",
    suit: "diamonds",
    trump: true,
    points: 3,
    value: 32,
    image: 'https://deckofcardsapi.com/static/img/QD.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "JC",
    suit: "clubs",
    trump: true,
    points: 2,
    value: 31,
    image: 'https://deckofcardsapi.com/static/img/JC.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "JS",
    suit: "spades",
    trump: true,
    points: 2,
    value: 30,
    image: 'https://deckofcardsapi.com/static/img/JS.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "JH",
    suit: "hearts",
    trump: true,
    points: 2,
    value: 29,
    image: 'https://deckofcardsapi.com/static/img/JH.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "JD",
    suit: "diamonds",
    trump: true,
    points: 2,
    value: 28,
    image: 'https://deckofcardsapi.com/static/img/JD.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "AD",
    suit: "diamonds",
    trump: true,
    points: 11,
    value: 27,
    image: 'https://deckofcardsapi.com/static/img/AD.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "10D",
    suit: "diamonds",
    trump: true,
    points: 10,
    value: 26,
    image: 'https://deckofcardsapi.com/static/img/0D.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "KD",
    suit: "diamonds",
    trump: true,
    points: 4,
    value: 25,
    image: 'https://deckofcardsapi.com/static/img/KD.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "9D",
    suit: "diamonds",
    trump: true,
    points: 0,
    value: 24,
    image: 'https://deckofcardsapi.com/static/img/9D.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "8D",
    suit: "diamonds",
    trump: true,
    points: 0,
    value: 23,
    image: 'https://deckofcardsapi.com/static/img/8D.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "AS",
    suit: "spades",
    trump: false,
    points: 11,
    value: 20,
    image: 'https://deckofcardsapi.com/static/img/AS.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "10S",
    suit: "spades",
    trump: false,
    points: 10,
    value: 15,
    image: 'https://deckofcardsapi.com/static/img/0S.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "KS",
    suit: "spades",
    trump: false,
    points: 4,
    value: 10,
    image: 'https://deckofcardsapi.com/static/img/KS.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "9S",
    suit: "spades",
    trump: false,
    points: 0,
    value: 9,
    image: 'https://deckofcardsapi.com/static/img/9S.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "8S",
    suit: "spades",
    trump: false,
    points: 0,
    value: 8,
    image: 'https://deckofcardsapi.com/static/img/8S.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "7S",
    suit: "spades",
    trump: false,
    points: 0,
    value: 7,
    image: 'https://deckofcardsapi.com/static/img/7S.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "AH",
    suit: "hearts",
    trump: false,
    points: 11,
    value: 20,
    image: 'https://deckofcardsapi.com/static/img/AH.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "10H",
    suit: "hearts",
    trump: false,
    points: 10,
    value: 15,
    image: 'https://deckofcardsapi.com/static/img/0H.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "KH",
    suit: "hearts",
    trump: false,
    points: 4,
    value: 10,
    image: 'https://deckofcardsapi.com/static/img/KH.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "9H",
    suit: "hearts",
    trump: false,
    points: 0,
    value: 9,
    image: 'https://deckofcardsapi.com/static/img/9H.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "8H",
    suit: "hearts",
    trump: false,
    points: 0,
    value: 8,
    image: 'https://deckofcardsapi.com/static/img/8H.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "7H",
    suit: "hearts",
    trump: false,
    points: 0,
    value: 7,
    image: 'https://deckofcardsapi.com/static/img/7H.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "AC",
    suit: "clubs",
    trump: false,
    points: 11,
    value: 20,
    image: 'https://deckofcardsapi.com/static/img/AC.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "10C",
    suit: "clubs",
    trump: false,
    points: 10,
    value: 15,
    image: 'https://deckofcardsapi.com/static/img/0C.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "KC",
    suit: "clubs",
    trump: false,
    points: 4,
    value: 10,
    image: 'https://deckofcardsapi.com/static/img/KC.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "9C",
    suit: "clubs",
    trump: false,
    points: 0,
    value: 9,
    image: 'https://deckofcardsapi.com/static/img/9C.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "8C",
    suit: "clubs",
    trump: false,
    points: 0,
    value: 8,
    image: 'https://deckofcardsapi.com/static/img/8C.png',
    cardbacking: 'Cardbacking.jpg'
  },
  {
    card: "7C",
    suit: "clubs",
    trump: false,
    points: 0,
    value: 7,
    image: 'https://deckofcardsapi.com/static/img/7C.png',
    cardbacking: 'Cardbacking.jpg'
  }
]

// Player cards
let playerHand = [];
let playerFaceUp = [];
let playerFaceDown = [];

// Computer Cards
let compHand = [];
let compFaceUp = [];
let compFaceDown = [];

// Start New Game
let turn = null;
let firstTurn = null;

function determineFirst() {
  let first = Math.floor(Math.random() * 2)
  if(first === 0) {
    turn = "player"
  } else {
    turn = "computer"
  }
  firstTurn = turn
}

function newGame() {
  resetScores();
  shuffle()
  deal()
  determineFirst()
  if(turn == "computer") {
    setTimeout(() => {
      computerPlayCard()
    }, 500)
  } else {
    filterPlayerCards()
  }
}

// Continue Game
function nextFirstTurn() {
  if(firstTurn == "computer") {
    turn = "player";
  } else {
    turn = "computer";
  }
  firstTurn = turn;
}

function continueGame() {
  playerWinsScreen.classList.add('hidden');
  comWinsScreen.classList.add('hidden');
  resetCardPiles();
  shuffle();
  deal();
  nextFirstTurn()
  if(turn == "computer") {
    setTimeout(() => {
      computerPlayCard()
    }, 500)
  } else {
    filterPlayerCards()
  }
}

// Shuffle cards

function shuffle() {
  deck.sort((a, b) => Math.random() - 0.5)
}

//Deal cards

function deal() {
  playerHand = deck.slice(0, 8);
  computerHand = deck.slice(8, 16);
  playerFaceDown = deck.slice(16, 20);
  compFaceDown = deck.slice(20, 24);
  playerFaceUp = deck.slice(24, 28);
  compFaceUp = deck.slice(28)
  showCards()
}

function createShownCard(card) {
  createdCard = document.createElement('img');
  createdCard.src = card.image;
  createdCard.alt = card.card;
  createdCard.dataset.value = card.value;
  createdCard.dataset.points = card.points;
  createdCard.dataset.trump = card.trump;
  createdCard.dataset.suit = card.suit;
  createdCard.dataset.img = card.image;
  createdCard.classList.add('card-motion');
  return createdCard
}

function moveCard() {
  movedCard = document.createElement('img');
  movedCard.src = playerFaceDown[0].image;
  movedCard.alt = playerFaceDown[0].card;
  movedCard.dataset.value = playerFaceDown[0].value;
  movedCard.dataset.points = playerFaceDown[0].points;
  movedCard.dataset.trump = playerFaceDown[0].trump;
  movedCard.dataset.suit = playerFaceDown[0].suit;
  return movedCard
}

function moveComCard() {
  movedCard = document.createElement('img');
  movedCard.src= compFaceDown[0].cardbacking;
  movedCard.alt = compFaceDown[0].card;
  movedCard.dataset.value = compFaceDown[0].value;
  movedCard.dataset.points = compFaceDown[0].points;
  movedCard.dataset.trump = compFaceDown[0].trump;
  movedCard.dataset.suit = compFaceDown[0].suit;
  movedCard.dataset.img = compFaceDown[0].image;
  return movedCard
}

function createUnseenCard(card) {
  createdCard = document.createElement('img');
  createdCard.src = card.cardbacking;
  createdCard.alt = card.card;
  createdCard.dataset.value = card.value;
  createdCard.dataset.points = card.points;
  createdCard.dataset.trump = card.trump;
  createdCard.dataset.suit = card.suit;
  createdCard.dataset.img = card.image;
  createdCard.classList.add('card-motion');
  return createdCard
}

function setupPlayerCards() {
  playerHand.forEach((card) => {
    let createdCard = createShownCard(card);
    playerCardsInHand.appendChild(createdCard);
    createdCard.addEventListener('click', () => {
      if(turn === "player" && createdCard.classList.contains('playable')) {
        playerCardsInHand.removeChild(createdCard);
        playedPlayerCard.appendChild(createdCard);
        createdCard.classList.add('played-card');
        createdCard.classList.remove('playable');
        playerPlayedCard()
      }
    })
  })
  playerFaceUp.forEach((card) => {
    let createdCard = createShownCard(card);
    playerCardsFaceUp.appendChild(createdCard);
    createdCard.addEventListener('click', () => {
      if(turn === "player" && createdCard.classList.contains('playable')) {
        playerCardsFaceUp.removeChild(createdCard);
        playedPlayerCard.appendChild(createdCard);
        createdCard.classList.add('played-card');
        createdCard.classList.remove('playable');
        playerPlayedCard()
        let movedCard = moveCard()
        playerCardsInHand.appendChild(movedCard);
        movedCard.addEventListener('click', () => {
          if(turn === "player" && movedCard.classList.contains('playable')) {
            playerCardsInHand.removeChild(movedCard);
            playedPlayerCard.appendChild(movedCard);
            movedCard.classList.add('played-card');
            movedCard.classList.remove('playable');
            playerPlayedCard()
          }
        })
      playerFaceDown.shift();
      playerCardsFaceDown.removeChild(playerCardsFaceDown.childNodes[0]);
      }
    })
  })
  playerFaceDown.forEach((card) => {
    let createdCard = createUnseenCard(card)
    playerCardsFaceDown.appendChild(createdCard);
  })
}

function showCompCards() {
  computerHand.forEach((card) => {
    let createdCard = createUnseenCard(card)
    computerCardsInHand.appendChild(createdCard);
  })
  compFaceUp.forEach((card) => {
    let createdCard = createShownCard(card);
    computerCardsFaceUp.appendChild(createdCard);
  })
  compFaceDown.forEach((card) => {
    let createdCard = createUnseenCard(card)
    computerCardsFaceDown.appendChild(createdCard);
  })
}

function showCards() {
  setupPlayerCards()
  showCompCards()
}

//Determine Card Playability

let currentPlayerCards
let playerCurrentHand
let playerCurrentFaceUp

function filterPlayerCards() {
  playerCurrentHand =  document.querySelector('.player-cards-in-hand');
  playerCurrentFaceUp = document.querySelector('.player-cards-face-up');
  let currentPlayerHand = Array.from(playerCurrentHand.children)
  let currentPlayerFaceUp = Array.from(playerCurrentFaceUp.children)
  currentPlayerCards = currentPlayerHand.concat(currentPlayerFaceUp)
  if(computerCard != null) {
    if(computerCard.dataset.trump == "false") {
      checkPlayerSuits()
      if(checkPlayerSuits() == true) {
        currentPlayerCards = currentPlayerCards.filter((card) => {
            return card.dataset.suit == computerCard.dataset.suit && Number(card.dataset.value) < 21
        })
      } else {
        checkPlayerTrump()
        if(checkPlayerTrump() == true) {
          // remove class from all fail
          currentPlayerCards = currentPlayerCards.filter((card) => {
            return card.dataset.trump == "true"
          })
        }
      }
    } else { //computerCard.dataset.trump == "true"
      checkPlayerTrump()
      if(checkPlayerTrump() == true) {
        // remove class from all fail
        currentPlayerCards = currentPlayerCards.filter((card) => {
          return card.dataset.trump == "true"
        })
      }
    }
  }
  currentPlayerCards.forEach((card) => {
    playerCurrentHand.childNodes.forEach((child) => {
      if(child.alt == card.alt) {
        child.classList.add('playable')
      }
    })
    playerCurrentFaceUp.childNodes.forEach((child) => {
      if(child.alt == card.alt) {
        child.classList.add('playable')
      }
    });
  })
}

function checkPlayerSuits() {
  let playerHasSuit = false
  if(currentPlayerCards.length > 1) {
    playerFailCards = currentPlayerCards.filter((cards) => {
      return Number(cards.dataset.value) < 21
    });
    playerFailCards = currentPlayerCards.filter((cards) => {
      if(Number(cards.dataset.value) < 21) {
        return cards.dataset.suit == computerCard.dataset.suit
      }
    });
    playerFailCards.forEach((cards) => {
      if(cards.dataset.suit == computerCard.dataset.suit) {
        playerHasSuit = true
      }
    })
  }
  return playerHasSuit
}

function checkPlayerTrump() {
  let hasTrump = false
  currentPlayerCards.forEach((card) => {
    if(card.dataset.trump == "true") {
      hasTrump = true
    }
  })
  return hasTrump
}

// Computer Play Cards
let currentHand
let currentFaceUp
let currentCards
let currentFaceUpCards
let compPlayableCards = []
let comFaceUpHand
let comFaceDownHand

function computerPlayCard() {
  let comCard = computerChooseCard()
  comCard.classList.add('computer-card')
  if(comCard.src != comCard.dataset.img) {
    comCard.src = comCard.dataset.img
  }
  computerCard = document.querySelector('.played-computer-card');
  computerCard.appendChild(comCard);
  currentHand = document.querySelector('.computer-cards-in-hand');
  currentHand.childNodes.forEach((card) => {
    if(card.alt == comCard.alt) {
      currentHand.removeChild(card)
    }
  });
  comFaceUpHand = document.querySelector('.computer-cards-face-up');
  comFaceDownHand = document.querySelector('.computer-cards-face-down');
  if(comFaceUpHand.childElementCount < comFaceDownHand.childElementCount) {
    let moveCard = moveComCard();
    currentHand.appendChild(moveCard);
    compFaceDown.shift();
    comFaceDownHand.removeChild(comFaceDownHand.childNodes[0]);
  }
  setTimeout(() => {
    compPlayedCard()
  }, 500)
}

function determineCurrentCards() {
  currentHand = document.querySelector('.computer-cards-in-hand');
  currentFaceUp = document.querySelector('.computer-cards-face-up');
  currentCards = Array.from(currentHand.childNodes)
  currentFaceUpCards = Array.from(currentFaceUp.childNodes)
  compPlayableCards = currentCards.concat(currentFaceUpCards)
}

function computerChooseCard() {
  determineCurrentCards()
  if(turn == "computer") {
    if(playerCard != null) {
      if(playerCard.dataset.trump == "true") {
        if(checkForTrump() == true) {
          return compPlayTrump()
        } else {
          return compPlayFail()
        }
      } else {
        checkSuit()
        if(checkSuit() == true) {
          return compPlayFail()
        } else {
          if(checkForTrump() == true) {
            return compPlayTrump()
          } else {
            return compPlayFail()
          }
        }
      }
    } else {
      checkForAce()
      if(checkForAce() == true) {
        return compPlayFail()
      } else {
        let secondTimeAround = Math.floor(Math.random() * 10 + 1)
        if(secondTimeAround > 4) {
          return compPlayFail()
        } else {
          return compPlayTrump()
        }
      }
    }
  }
}

function checkSuit() {
  let comHasSuit = false
  if(compPlayableCards.length > 1) {
    compFailCards = compPlayableCards.filter((cards) => {
      return Number(cards.dataset.value) < 21
    });
    compFailCards = compPlayableCards.filter((cards) => {
      if(Number(cards.dataset.value) < 21) {
        return cards.dataset.suit == playerCard.dataset.suit
      }
    });
    compFailCards.forEach((cards) => {
      if(cards.dataset.suit == playerCard.dataset.suit) {
        comHasSuit = true
      }
    })
  }
  return comHasSuit
}

function checkForTrump() {
  let hasTrump = false
  compPlayableCards.forEach((card) => {
    if(card.dataset.trump == "true") {
      hasTrump = true
    }
  })
  return hasTrump
};

function filterFail() {
  compPlayableCards = compPlayableCards.filter((cards) => {
    return cards.dataset.trump == "false"
  });
  if(playerCard != null && playerCard.dataset.trump == "false") {
    checkSuit()
    if(checkSuit() == true) {
      compPlayableCards = compPlayableCards.filter((cards) => {
        return cards.dataset.suit == playerCard.dataset.suit
      });
    }
  }
}

function compPlayTrump() {
  let cardToPlay = null
  if(playerCard !== null) {
    if(playerCard.dataset.trump == "false") {
      let trump = "high"
      compPlayableCards.forEach((card) => {
        if(Number(card.dataset.value) < 28) {
          trump = "low"
        }
      })
      if(trump === "low") {
        let cardValue = 0
        compPlayableCards = compPlayableCards.filter((cards) => {
          return cards.dataset.trump == "true"
        })
        compPlayableCards.forEach((card) => {
          if(Number(card.dataset.points) > 3) {
            cardValue = card.dataset.points
            if(cardValue <= Number(card.dataset.points)) {
              cardToPlay = card
            }
          } else {
            if(cardValue == 0) {
              cardValue = card.dataset.value
              cardToPlay = card
            } else {
              if(cardValue > Number(card.dataset.value)) {
                cardValue = card.dataset.value
                cardToPlay = card
              }
            }
          }
        });
      } else {
        let cardValue = 100
        compPlayableCards = compPlayableCards.filter((cards) => {
          return cards.dataset.trump == "true"
        })
        compPlayableCards.forEach((card) => {
          if(cardValue > Number(card.dataset.value)) {
            cardValue = card.dataset.value
            cardToPlay = card
          }
        });
      }
    } else {
      let cardValue = 100
      compPlayableCards = compPlayableCards.filter((cards) => {
        return cards.dataset.trump == "true"
      })
      compPlayableCards.forEach((card) => {
        if(cardValue == 100) {
          cardValue = card.dataset.value
          cardToPlay = card
        } else if(Number(card.dataset.value) > Number(playerCard.dataset.value) && Number(card.dataset.value) > cardValue) {
            cardValue = card.dataset.value
            cardToPlay = card
        } else if(cardValue < Number(playerCard.dataset.value) && cardValue > Number(card.dataset.value)) {
          cardValue = card.dataset.value
          cardToPlay = card
        }
      });
    }
  } else {
    compPlayableCards = compPlayableCards.filter((cards) => {
      return cards.dataset.trump == "true"
    });
    let trump = "high"
    compPlayableCards.forEach((card) => {
      if(Number(card.dataset.value) < 28) {
        trump = "low"
      }
    })
    if(trump == "high") {
      let cardValue = 100
      compPlayableCards.forEach((card) => {
        if(Number(card.dataset.value) < cardValue) {
          cardValue = card.dataset.value
          cardToPlay = card
        }
      });
    } else {
      let cardValue = 100
      compPlayableCards.forEach((card) => {
        if(cardValue === 100) {
          cardValue = card.dataset.value
          cardToPlay = card
        } else if(Number(card.dataset.value) > 27 && cardValue < 28 ) {
          cardValue = card.dataset.value
          cardToPlay = card
        } else if(Number(card.dataset.value) < cardValue && cardValue < 28) {
          cardValue = card.dataset.value
          cardToPlay = card
        }
      });
    }
  }
  if(cardToPlay == null) {
    determineCurrentCards()
    return compPlayFail()
  }
  return cardToPlay
}

function compPlayFail() {
  filterFail()
  let cardToPlay = null
  if(playerCard !== null) {
    if(playerCard.dataset.trump == "true") {
      let cardValue = 100
      compPlayableCards.forEach((card) => {
        if(cardValue > Number(card.dataset.value)) {
          cardValue = card.dataset.value
          cardToPlay = card
        }
      });
    } else {
      checkSuit()
      if(checkSuit() == true) {
        let cardValue = 0
        compPlayableCards.forEach((card) => {
          if(cardValue == 0) {
            cardValue = card.dataset.value
            cardToPlay = card
          } else if(Number(card.dataset.value) > Number(playerCard.dataset.value) && Number(card.dataset.value) > cardValue) {
              cardValue = card.dataset.value
              cardToPlay = card
          } else if(cardValue < Number(playerCard.dataset.value) && cardValue > Number(card.dataset.value)) {
            cardValue = card.dataset.value
            cardToPlay = card
          }
        })
      } else {
        let cardValue = 0
        compPlayableCards.forEach((card) => {
          if(cardValue == 0) {
            cardValue = card.dataset.value
            cardToPlay = card
          } else if(cardValue > Number(card.dataset.value)) {
            cardValue = card.dataset.value
            cardToPlay = card
          }
        })
      }
    }
  } else {
    checkForAce()
    if(checkForAce() !== null) {
      cardToPlay = playAce()
    } else {
      compPlayableCards = compPlayableCards.filter((cards) => {
        return cards.dataset.trump == "false"
      });
      cardToPlay = compPlayableCards[Math.floor(Math.random() * compPlayedCard.length)]
    }
  }
  if(cardToPlay == null) {
    determineCurrentCards()
    return compPlayTrump()
  }
  return cardToPlay
}

function checkForAce() {
  let ace = null
  computerCheckAce = compPlayableCards.filter((cards) => {
    return cards.dataset.trump == "false"
  });
  computerCheckAce.forEach((cards) => {
    if(cards.dataset.value == "20") {
      ace = true
    }
  })
  return ace
}

function playAce() {
  let ace = null
  computerCheckAce = compPlayableCards.filter((cards) => {
    return cards.dataset.trump == "false"
  });
  computerCheckAce.forEach((cards) => {
    if(cards.dataset.value == "20") {
      ace = cards
    }
  })
  return ace
}

// Compare cards
let playerCard = null
let computerCard = null
let leadSuit = null

function playerPlayedCard() {
  playerCurrentFaceUp.childNodes.forEach((child) => {
    if(child.classList.contains('playable')) {
      child.classList.remove('playable')
    }
  });
  playerCurrentHand.childNodes.forEach((child) => {
    if(child.nodeName == "IMG") {
      if(child.classList.contains('playable')) {
        child.classList.remove('playable')
      }
    }
  })
  playerCard = document.querySelector('.played-card');
  if(computerCard !== null) {
    setTimeout(() => {
      compareCards()
    }, 500)
  } else {
    leadSuit = playerCard.dataset.suit
    turn = "computer"
    setTimeout(() => {
      computerPlayCard()
    }, 500)
  }
}

function compPlayedCard() {
  computerCard = document.querySelector('.computer-card');
  if(playerCard !== null) {
    compareCards()
  } else {
    leadSuit = computerCard.dataset.suit
    filterPlayerCards()
    turn = "player"
  }
}

function compareCards() {
  if(playerCard.dataset.trump === "true" && computerCard.dataset.trump === "true") {
    if(Number(playerCard.dataset.value) > Number(computerCard.dataset.value)) {
      playerWinsTrick()
    } else {
      computerWinsTrick()
    }
  } else if(playerCard.dataset.trump === "true" && computerCard.dataset.trump === "false") {
    playerWinsTrick()
  } else if(playerCard.dataset.trump === "false" && computerCard.dataset.trump === "true") {
    computerWinsTrick()
  } else {
    if(playerCard.dataset.suit === leadSuit && computerCard.dataset.suit !== leadSuit) {
      playerWinsTrick()
    } else if(playerCard.dataset.suit !== leadSuit && computerCard.dataset.suit === leadSuit) {
      computerWinsTrick()
    } else {
      if(Number(playerCard.dataset.value) > Number(computerCard.dataset.value)) {
        playerWinsTrick()
      } else {
        computerWinsTrick()
      }
    }
  }
}

// Decide Outcome of a Play

function resetCardsPlayed() {
  playerCard.remove()
  computerCard.remove()
  playerCard = null
  computerCard = null
  leadSuit = null
  trickWinner.innerText = null;
  trickPoints.innerText = null;
}

function playerWinsTrick() {
  if(playerScore == null) {
    playerScore = Number(playerCard.dataset.points) + Number(computerCard.dataset.points);
  } else {
    playerScore += Number(playerCard.dataset.points) + Number(computerCard.dataset.points);
  }
  trickWinner.innerText = "Player Wins"
  trickPoints.innerText = Number(playerCard.dataset.points) + Number(computerCard.dataset.points);
  setTimeout(() => {
    if(playerCardPile.src = " ") {
      playerCardPile.src = "Cardbacking.jpg"
    }
    playerTrickScore.innerText = Number(playerTrickScore.innerText) + Number(playerCard.dataset.points) + Number(computerCard.dataset.points)
    resetCardsPlayed()
    if(comFaceUpHand.childElementCount == 0 && currentHand.childElementCount == 0) {
      finishHand()
    } else {
      turn = "player"
      filterPlayerCards()
    }
  }, 500);
  playerTrickPile.classList.remove('hidden')
}

function computerWinsTrick() {
  if(computerScore == null) {
    computerScore = Number(playerCard.dataset.points) + Number(computerCard.dataset.points);
  } else {
    computerScore += Number(playerCard.dataset.points) + Number(computerCard.dataset.points);
  }
  trickWinner.innerText = "Com Wins"
  trickPoints.innerText = Number(playerCard.dataset.points) + Number(computerCard.dataset.points);
  setTimeout(() => {
    if(computerCardPile.src = " ") {
      computerCardPile.src = "Cardbacking.jpg"
    }
    computerTrickScore.innerText = Number(computerTrickScore.innerText) + Number(playerCard.dataset.points) + Number(computerCard.dataset.points)
    resetCardsPlayed()
  }, 500);
  if(comFaceUpHand.childElementCount == 0 && currentHand.childElementCount == 0) {
    finishHand()
  } else {
    turn = "computer"
    setTimeout(() => {
    computerPlayCard()
    }, 500);
  }
  computerTrickPile.classList.remove('hidden');
}

// Finish Hand

function finishHand() {
  if(playerScore > computerScore) {
    playerWinsScreen.classList.remove('hidden');
  } else {
    comWinsScreen.classList.remove('hidden');
  }
  scoreGame();
}

// Score Hand
let playerScore = null;
let computerScore = null;

function scoreGame() {
  if(playerScore > computerScore) {
    if(playerScore === 120) {
      playerGameScore += 9
    } else if(playerScore >= 90) {
      playerGameScore += 6
    } else if(playerScore >= 61) {
      playerGameScore += 3
    }
  } else if(playerScore < computerScore) {
    if(computerScore === 120) {
      computerGameScore += 9
    } else if(computerScore >= 90) {
      computerGameScore += 6
    } else if(computerScore >= 61) {
      computerGameScore += 3
    }
  } else {
    if(firstTurn = "player") {
      computerGameScore += 3
    } else {
      playerGameScore += 3
    }
  }
  playerScoreCard.forEach(score => {score.innerText += `- ${playerGameScore}`});
  comScoreCard.forEach(score => {score.innerText += `- ${computerGameScore}`});
  checkForWinner();
}

// Score Game
let playerGameScore = 0;
let computerGameScore = 0;

function checkForWinner() {
  if(playerGameScore >= 42) {
    playerWinsGame()
  } else if(computerGameScore >= 42) {
    computerWinsGame()
  }
}

function playerWinsGame() {
  playerWinsText.innerText = "Player Wins The Game!"
  playerWinsScreen.classList.remove('hidden');
  nextHandBtn.forEach((btn) => {
    btn.classList.add('hidden');
  });
}

function computerWinsGame() {
  comWinsText.innerText = "Computer Wins The Game!"
  comWinsScreen.classList.remove('hidden');
  nextHandBtn.forEach((btn) => {
    btn.classList.add('hidden');
  });
}

// Continue with Next Hand
function resetCardPiles() {
  playerScore = null;
  computerScore = null;
  playerTrickPile.classList.add('hidden');
  playerCardPile.src =
  playerTrickScore.innerText = ""
  computerTrickPile.classList.add('hidden');
  computerCardPile.src =
  computerTrickScore.innerText = ""
}

function resetScores()  {
  playerGameScore = 0;
  computerGameScore = 0;
  playerWinsText.innerText = "Player Wins Hand";
  comWinsText.innerText = "Computer Wins Hand";
  playerScoreCard.forEach(score => {score.innerText = "Player"});
  comScoreCard.forEach(score => {score.innerText = "Computer"});
  nextHandBtn.forEach((btn) => {
    btn.classList.remove('hidden');
  });
}
