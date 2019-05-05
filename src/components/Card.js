import { createEl } from "./utils";
import { CardList } from "./CardList";

export class Card {
    constructor(title, category, description){
        this.cardsContainer = document.querySelector('.cards__container')
        this.title = title
        this.category = category
        this.description = description
        this.createCard(title, category, description)
    }
    createCard(title, category, description) {
        this.newCard = createEl({
            type: 'div',
            target: this.cardsContainer,
            position: 'beforeend'
        })
        this.newCard.innerHTML = `
        <h2>${title}</h2>
        <h3>${category}</h3>
        <p>${description}</p>`
    }
}