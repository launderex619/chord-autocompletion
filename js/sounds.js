//const stickyNote
// Tone.Synth is a basic synthesizer with a single oscillator
const synth = new Tone.Synth();
// Set the tone to sine
synth.oscillator.type = "sine";
// connect it to the master output (your speakers)
synth.toDestination();


const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  // fires off a note continously until trigger is released
  var id = e.target.id
  if(document.getElementById(id).classList.contains("disabled")){
    launchToast('Your melody is being generated!');
    return;
  }
  playNote(id, true);
});

piano.addEventListener("mouseup", e => {
  // stops the trigger
  synth.triggerRelease();
});


//makeSound
function playNote(note, addToList) {
  switch (note) {
    case "do":
      if (addToList) {
        addNota(note, "C5");
      }
      return synth.triggerAttack("C5");
    case "re_b":
      if (addToList) {
        addNota(note, "C#5");
      }
      return synth.triggerAttack("C#5");
    case "re":
      if (addToList) {
        addNota(note, "D5");
      }
      return synth.triggerAttack("D5");
    case "mi_b":
      if (addToList) {
        addNota(note, "D#5");
      }
      return synth.triggerAttack("D#5");
    case "mi":
      if (addToList) {
        addNota(note, "E5");
      }
      return synth.triggerAttack("E5");
    case "fa":
      if (addToList) {
        addNota(note, "F4");
      }
      return synth.triggerAttack("F4");
    case "sol_b":
      if (addToList) {
        addNota(note, "F#4");
      }
      return synth.triggerAttack("F#4");
    case "sol":
      if (addToList) {
        addNota(note, "G4");
      }
      return synth.triggerAttack("G4");
    case "la_b":
      if (addToList) {
        addNota(note, "G#4");
      }
      return synth.triggerAttack("G#4");
    case "la":
      if (addToList) {
        addNota(note, "A4");
      }
      return synth.triggerAttack("A4");
    case "si_b":
      if (addToList) {
        addNota(note, "A#4");
      }
      return synth.triggerAttack("A#4");
    case "si":
      if (addToList) {
        addNota(note, "B4");
      }
      return synth.triggerAttack("B4");
  }
}

function playSong(notes) {
  if(notes.length <= 0){
    launchToast('Stroke the piano!');
    return;
  }else{
    launchToast('Playing your song');
  }
  Tone.Transport.stop();
  Tone.Transport.position = 0;
  Tone.Transport.cancel();

  // create an array of notes to be played
  const notas = notes.map(function (obj) {
    return obj.sonido;
  });
  console.log(notas);
  var i = 0;
  // create a new sequence with the synth and notes
  const synthPart = new Tone.Sequence(
    function (time, note) {
      moveGuide(i++ % notes.length);
      console.log(time, note, i);
      synth.triggerAttackRelease(note, .1);
    },
    notas,
    "4n"
  );
  // Setup the synth to be ready to play on beat 1 and end at the end xd
  synthPart.start().stop(notes.length);
  // start the transport which controls the main timeline
  Tone.Transport.start();
}


/**
 * Documentation & References
 https://tonejs.github.io/
 * https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/
 * https://getbootstrap.com/docs/4.0/components/navs/#horizontal-alignment
 * 
 * https://material.io/resources/icons/?search=back&icon=arrow_back&style=baseline
 * 
 https://codepen.io/cesarmurillos/pen/ExxqqPM
 */