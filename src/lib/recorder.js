class Recorder {
    constructor() {
        this.on = false;
        this.btnColor = 'red';
        this.btn = document.getElementById('btnRecord');
        this.btn.style.color = this.btnColor;
        this.btn.disabled = false;
        this.btn.addEventListener('click', handleClick.bind(this));
        this.btn.updateProps = updateProps.bind(this);
        this.btnPlay = document.getElementById('btnPlay');
    }

    start() {
        this.btn.disabled = true;
        sequencerStatus.innerText = 'Start recording in 3..';
        let count = 2;
        const metronome = new Audio();
        metronome.src = 'sounds/metronome.wav';
        metronome.play();
        let countDown = setInterval(() =>{
		  if (count >= 1) {							 
           	metronome.currentTime = 0;
          	 metronome.play();
		  }
            sequencerStatus.innerText +=  count + '..';
            if (--count < 0) {
                clearInterval(countDown);
                countDown = null;
                this.btn.disabled = false;
                this.btnPlay.disabled = true;
                updateBtns();
                sequencerStatus.innerText = 'Recording...';
                sequencer.start();
            }
        }, 1000);
    }

    stop() {
        sequencer.stop();
        if (sequencer.waitTimes.length) {
            this.btnPlay.disabled = false;
            sequencerStatus.innerText = 'Recorder stopped';
        }
        else {
            sequencerStatus.innerText = 'Nothing recorded';
        }
        updateBtns();
    }
}
