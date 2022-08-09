
let PLEASEBLOB;
console.log(mm)

const model = new mm.OnsetsAndFrames('https://storage.googleapis.com/magentadata/js/checkpoints/transcription/onsets_frames_uni');
// const model = core.OnsetsAndFrames('https://storage.googleapis.com/magentadata/js/checkpoints/transcription/onsets_frames_uni');
// const file = '/static/audio/test.wav';


document.querySelector('input').onchange = function () {
    var fileReader = new FileReader;
    fileReader.onload = function () {
        var arrayBuffer = this.result;
        const blob = new Blob([arrayBuffer], { type: "audio/wav" });
        PLEASEBLOB = blob
        console.log(blob)
        model.initialize().then(() => {
            transcribeFromFile(blob)
        });
   
    };
    fileReader.readAsArrayBuffer(this.files[0]);

}

// transcribeFromFile(AudioTestFile)

async function transcribeFromFile(blob) {
    model.transcribeFromAudioFile(blob).then((ns) => {
        console.log(ns)
    });
}


// function saveMidi(event) {
//     event.stopImmediatePropagation();
//     saveAs(new File([mm.sequenceProtoToMidi(visualizer.noteSequence)], 'transcription.mid'));
// }

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