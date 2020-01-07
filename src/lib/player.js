import { sounds } from './sounds';
import { sequencerStatus } from './sequencer';
import { handleClick, updateProps, updateBtns } from './btn';

export default class Player {
    constructor(sequencer) {
        this.on = false;
        this.btnColor = 'green';
        this.btn = document.getElementById('btnPlay');
        this.btn.disabled = true;
        this.btn.addEventListener('click', handleClick.bind(this));
        this.btn.updateProps = updateProps.bind(this);
        this.btnRecord = document.getElementById('btnRecord');
        this.sequencer = sequencer;
    }

    start() {
        this.btnRecord.disabled = true;
        updateBtns();
        sequencerStatus.innerText = 'Playing...';
        this.sequencer.run();
    }

    stop() {
        this.sequencer.end();
    }

    play(id) {
        sounds[id].currentTime = 0;
        sounds[id].play();
    }
};
