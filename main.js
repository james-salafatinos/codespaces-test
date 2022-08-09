const mvae = require('@magenta/music/node/music_vae');
const core = require('@magenta/music/node/core');
const OnsetsAndFrames = require('@magenta/music/node/transcription');


// const model = core.OnsetsAndFrames('https://storage.googleapis.com/magentadata/js/checkpoints/transcription/onsets_frames_uni');
  
console.log(OnsetsAndFrames)

// // Your code:
// const model = new mvae.MusicVAE('/path/to/checkpoint');
// const player = new core.Player();
// model
//   .initialize()
//   .then(() => model.sample(1))
//   .then(samples => {
//     player.resumeContext();
//     player.start(samples[0])
//   });