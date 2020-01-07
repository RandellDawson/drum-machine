import './style.css';
import createEventListeners from './lib/keyEvents';
import { Sequencer } from './lib/sequencer';
import Player from './lib/player';
import Recorder from './lib/recorder';
import Pads from './lib/pads';
import updatePlayer from './lib/app-utils';

class DrumMachine {
  constructor() {
    this.sequencer = new Sequencer();
    this.recorder = new Recorder();
    this.player = new Player();
    this.pads = new Pads();
    this.updatePlayer = updatePlayer.bind(this);
    this.createEventListeners = createEventListeners.bind(this);
  }
}

const app = new DrumMachine();
app.createEventListeners();