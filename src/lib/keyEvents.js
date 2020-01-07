const createKeyUpStatuses = ( ) => Object.keys(drumPads)
  .reduce((keys, key) => (keys[key] = true, keys), {});

  window.addEventListener("keydown", event => {
    const letter = String.fromCharCode(event.which).toUpperCase();
    if (keyUpStatuses.hasOwnProperty(letter) && keyUpStatuses[letter]) {
      document.getElementById(letter).classList.add('on');
      keyUpStatuses[letter] = false;
      updatePlayer(letter);
    }
  });

  window.addEventListener("keyup", event => {
    const letter = String.fromCharCode(event.which).toUpperCase();
    if (keyUpStatuses.hasOwnProperty(letter)) {
     document.getElementById(letter).classList.remove('on');
      keyUpStatuses[letter] = true;
    }
  });
