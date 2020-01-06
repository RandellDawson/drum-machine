class Player {
    constructor() {
        this.on = false;
        this.btnColor = 'green';
        this.btn = document.getElementById('btnPlay');
        this.btn.disabled = true;
        this.btn.addEventListener('click', handleClick.bind(this));
        this.btn.updateProps = updateProps.bind(this);
        this.btnRecord = document.getElementById('btnRecord');
    }

    start() {
        this.btnRecord.disabled = true;
        updateBtns();
        sequencerStatus.innerText = 'Playing...';
        sequencer.run();
    }

    stop() {
        sequencer.end();
    }

    play(id) {
        sounds[id].currentTime = 0;
        sounds[id].play();
    }
}
