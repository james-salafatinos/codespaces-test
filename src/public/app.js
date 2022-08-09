const model = new mm.OnsetsAndFrames(
  "https://storage.googleapis.com/magentadata/js/checkpoints/transcription/onsets_frames_uni"
);

//Handles uploading wav file
document.querySelector("input").onchange = function () {
  var fileReader = new FileReader();
  fileReader.onload = function () {
    var arrayBuffer = this.result;
    const blob = new Blob([arrayBuffer], { type: "audio/wav" });
    console.log("the infamous blob...", blob);
    model.initialize().then(() => {
      transcribeFromFile(blob);
    });
  };
  fileReader.readAsArrayBuffer(this.files[0]);
};

//Handles model prediction and then saves midi file
async function transcribeFromFile(blob) {
  model.transcribeFromAudioFile(blob).then((ns) => {
    let visualizer = new mm.Visualizer(ns, canvas);
    console.log(ns);
    console.log(visualizer);
    saveAs(
      new File(
        [mm.sequenceProtoToMidi(visualizer.noteSequence)],
        "transcription.mid"
      )
    );
  });
}
