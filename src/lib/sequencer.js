const sequencerStatus = document.getElementById('sequencer-status');

class Sequencer {
  constructor() {
    this.times = [];
    this.waitTimes = [];
    this.intervals = [];
  }

  start() {
    this.times = [];
    this.startTime = new Date();
  }

  stop() {
    this.endTime = new Date();
    this.waitTimes = this.generate();
  }

  addTime(sound) {
    this.times.push([sound, new Date()]);
  }

  generate() {
    let currTime = this.startTime;
    return this.times.reduce((waitTimes, [letter, time]) => {
      waitTimes.push([letter, time - currTime]);
      currTime = time;
      return waitTimes;
    }, []);
  }

  run() {
    let nextWaitTime = 0;
    for (let i in this.waitTimes) {
      const [letter, time] = this.waitTimes[i]
      nextWaitTime += time;
      const timeout = setTimeout(() => {
        // player.play(letter);
        this.updatePlayer(letter);
        clearTimeout(timeout);
        if (i == this.waitTimes.length - 1) {
          setTimeout(this.end.bind(this), 500); // bind sequencer end method
        }
      }, nextWaitTime);
      this.intervals.push(timeout);
    }
  }

  end() {
    for (let i in this.intervals) {
      clearInterval(this.intervals[i]);
    }
    this.intervals = []; // empty interval ids or will keep growing
    this.recorder.btn.disabled = false;
    this.player.on = false;
    updateBtns();
    sequencerStatus.innerText = 'Player stopped';
  }
}

export { Sequencer, sequencerStatus };