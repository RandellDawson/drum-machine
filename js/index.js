const changeBackground = (letter, type) => {
  const randomHex  = () => '#'+Math.floor(Math.random()*16777215).toString(16);
  const randomPerc = () => Math.floor(Math.random() * 70) + 40;
  if (letter === 'Q' || letter === 'E' || letter === 'Z' || letter === 'X') {
    let styleStr = "background: radial-gradient(black 0%, grey 60%, white 90%);";
    if (type === 'random') {
      styleStr = `background: radial-gradient(${randomHex()} 0%, ${randomHex()} ${randomPerc()}%, ${randomHex()} ${randomPerc()}%);`;
    }
    document.getElementsByTagName("body")[0].style = styleStr;
  }
};

const updatePlayer = letter => {
  if (drumPads[letter]) {
    player.play(letter);
    if (recorder.on) {
      sequencer.addTime(letter);
    }
    if (player.on) {
        const currBtn = document.getElementById(letter);
        currBtn.classList.add('on');
        changeBackground(letter, 'random')
        let press = setTimeout(() => {
            currBtn.classList.remove('on');
            changeBackground(letter);
            clearTimeout(press);
            press = null;
        },100);
    }
    soundText.innerText = drumPads[letter].text;
  }
};

const sequencer = new Sequencer();
const recorder = new Recorder();
const player = new Player();
const sounds = createAudioElems();
const pads = new Pads();
const keyUpStatuses = createKeyUpStatuses();
const sequencerStatus = document.getElementById('sequencer-status');
