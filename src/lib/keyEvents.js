import { drumPads } from './sounds';

const createKeyUpStatuses = () => Object.keys(drumPads)
  .reduce((keys, key) => (keys[key] = true, keys), {});

  const createEventListeners = () => {
    console.log('this1');
    console.log(this);
    const keyUpStatuses = createKeyUpStatuses();
    window.addEventListener("keydown", event => {
      const letter = String.fromCharCode(event.which).toUpperCase();
      if (keyUpStatuses.hasOwnProperty(letter) && keyUpStatuses[letter]) {
        document.getElementById(letter).classList.add('on');
        keyUpStatuses[letter] = false;
        console.log('this2');
        console.log(this);
        this.updatePlayer(letter);
  
      }
    });

  window.addEventListener("keyup", event => {
    const letter = String.fromCharCode(event.which).toUpperCase();
    if (keyUpStatuses.hasOwnProperty(letter)) {
      console.log('got here');
      console.log(keyUpStatuses);
      document.getElementById(letter).classList.remove('on');
      keyUpStatuses[letter] = true;
    }
  });
};
export default createEventListeners;