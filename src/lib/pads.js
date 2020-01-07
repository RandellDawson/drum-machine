import { drumPads } from './sounds';

export default class Pads {
    constructor() {
        this.pads = document.querySelector('.pads');
        this.pads.innerHTML = this.create();
        this.pads.addEventListener('mousedown', function ({ target: { id: letter } }) {
            updatePlayer(letter);
        });
    }

    
    create() {
        return Object
          .keys(drumPads)
          .reduce((padsHTML, key) => (
              padsHTML += `<button class="drum-pad" id="${key}">${key}</button>`
          ), '');
    }
};
