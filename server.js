const express = require('express');
const uid = require('uid');
const app = express();
const fs = require('fs');
app.use(express.json());
app.use(express.static('./dist'));

const filePath = __dirname + '/cards.json';
let cards;

readCards();

app.listen(3000, err => {
  err ? console.log(err) : console.log('Server is ready');
});

app.post('/cards', (req, res) => {
  readCards();
  const newCard = { ...req.body, id: uid() };
  res.json(newCard);
  cards = [...cards, newCard];
  saveCards(cards);
});

app.get('/cards', (req, res) => {
  res.json(cards);
});

app.get('/cards/:id', (req, res) => {
  const { id } = req.params;
  res.json(cards.find(card => card.id === id));
});

app.delete('/cards/:id', (req, res) => {
  readCards();
  const { id } = req.params;
  const card = cards.find(card => card.id === id);
  const index = cards.indexOf(card);
  cards = [...cards.slice(0, index), ...cards.slice(index + 1)];
  saveCards(cards);
  readCards();
});

function readCards() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      writeCardsFile();
      console.log('cardsFile would be created');
    } else {
      cards = JSON.parse(data);
    }
  });
}

function saveCards(cards) {
  fs.writeFile(filePath, JSON.stringify(cards), 'utf8', err => {
    if (err) {
      console.log('could not save new cards');
    }
  });
}

function writeCardsFile() {
  fs.writeFile(filePath, 'utf8', err => {
    if (err) {
      console.log('could not write CardsFile');
    }
  });
}
