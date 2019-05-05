export function createEl({
    className = 'card',
    type = 'div',
    target = document.body,
    position = 'beforeend',
    innerHTML = '',
  }) {
    const el = document.createElement(type)
    el.className = className
    el.innerHTML = innerHTML
    target.insertAdjacentElement(position, el)
    return el
  }