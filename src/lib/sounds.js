const drumPads = {
  Q: {sound: 'Heater-1', text: 'HEATER-1'},
  W: {sound: 'Heater-2', text: 'HEATER-2'},
  E: {sound: 'Heater-3', text: 'HEATER-3'},
  A: {sound: 'Heater-4_1', text: 'HEATER-4'},
  S: {sound: 'Heater-6', text: 'CLAP'},
  D: {sound: 'Dsc_Oh', text: 'OPEN HH'},
  Z: {sound: 'Kick_n_Hat', text: 'KICK N\' HAT'},
  X: {sound: 'RP4_KICK_1', text: 'KICK'},
  C: {sound: 'Cev_H2', text: 'CLOSED HH'}
};

const createAudioElems = ( ) => {
    return  Object.keys(drumPads).reduce((sounds, key) => {
      const {sound} = drumPads[key];
      const source = `sounds/${sound}.wav`;
      sounds[key] = new Audio();
      sounds[key].src = source;
      return sounds;
    }, {});
};

const sounds = createAudioElems();

export { drumPads, sounds };