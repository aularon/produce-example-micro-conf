'use strict';

class RandomWordElement {
  constructor(words) {
    this.words = words;
  }

  asHTMLElement(tagName='DIV') {
    var randomWord = this.words[Math.floor(Math.random() * this.words.length)]
    var elem = document.createElement(tagName);
    elem.appendChild(document.createTextNode(randomWord))

    return elem;
  }
}

var rwe = new RandomWordElement(['Hello', 'HI', 'Greetings']);
document.body.appendChild(rwe.asHTMLElement('H1'))
