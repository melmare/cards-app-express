export class Form {
  constructor() {
    this.form = document.querySelector('.form');
    this.btn = document.querySelector('.btn');
    this.form = document.querySelector('form');
    this.titleInput = document.querySelector('.form__input--title');
    this.descriptionInput = document.querySelector('.form__input--description');
    this.categoryInput = document.querySelector('.form__input--category');

    this.form.addEventListener('submit', event => {
      event.preventDefault();

      fetch('/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.titleInput.value,
          description: this.descriptionInput.value,
          category: this.categoryInput.value
        })
      })
        .then(res => res.json())
    });
  }
}
