import { Card } from "./Card";
import { createEl } from "./utils";


export class CardList {
    constructor() {
        this.cardsContainer = document.querySelector('.cards__container');
        fetch('/cards')
        .then(res => res.json())
        .then(data => this.renderCards(data))
        
    }

    renderCards(data) {
        this.cardList = data
        this.cardList.forEach(card => new Card(card.title, card.category, card.description))
    }

    
    
    
}




