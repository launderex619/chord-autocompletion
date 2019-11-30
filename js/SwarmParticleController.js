class Chord {
  constructor(notes) {
    this.AVERAGE = this.getAverage(notes);
    this.MIN_VALUE = this.AVERAGE - 10.0;
    this.MAX_VALUE = this.AVERAGE + 10.0;
  }
  /*
  0: {nombre: "fa", sonido: "F4"}
  1: {nombre: "sol_b", sonido: "F#4"}
  2: {nombre: "sol", sonido: "G4"}
  3: {nombre: "la_b", sonido: "G#4"}
  */
  getAverage(notes) {
    let average = 0;
    for (let i = 1; i < notes.length; i++) {
      let note = NOTE_TYPE[notes[i - 1].nombre];
      average += note[notes[i].nombre];
    }
    average = average / notes.length;
    return average;
  }

  fitness(notes) {
    //console.log("fitness notes: ", notes);
    let average = 0;
    for(let i = 0; i < notes.length; i++){
      average += notes[i];
    }
    return average / notes.length;
  }
}

function generateMelody(notes) {
  var numberNotes = document.getElementById("numberNotes").value;
  if (numberNotes <= 0) {
    launchToast('Type an amount of notes to play');
    return;
  }
  if (notes.length <= 0) {
    launchToast('Stroke the piano!');
    return;
  } else {
    launchToast('Generating your melody...');
    problema = new Chord(notes);
    cantidadParticulas = 50;
    tamanioVecindario = 16;
    iteraciones = 2000;
    dimensiones = numberNotes;
    cognitionLearningRate = 1.4944;
    socialLearningRate = 1.4944;
    spo = new SPO(iteraciones,
      cantidadParticulas,
      tamanioVecindario,
      dimensiones,
      cognitionLearningRate,
      socialLearningRate,
      problema,
    );
    spo.run();
  }
  setTimeout(function () { launchToast('Your melody is ready!'); }, 2000);
  dimensiones = dimensiones * 2;
}