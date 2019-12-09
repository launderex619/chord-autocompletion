class Chord {
  constructor(notes) {
    this.AVERAGE = this.getAverage(notes);
    this.MIN_VALUE = this.AVERAGE - 10.0;
    this.MAX_VALUE = this.AVERAGE + 10.0;
  }
  //Obtains the average from the chords based in its proximity
  getAverage(notes) {
    //console.log(notes);
    let average = 0;
    for (let i = 1; i < notes.length; i++) {
      /**
       * 
      let note = NOTE_TYPE[notes[i - 1].nombre];
      average += note[notes[i].nombre];
       */
      let note = NOTE_TYPE[notes[i - 1].nombre];//Aqui es donde se presenta el error
      average += note[notes[i].nombre];//Aqui es donde se presenta el error
    }
    average = average / notes.length;
    return average;
  }

  fitness(notes) {
    let notesInText = [];
    //console.log("in fitness", notes);
    notes.forEach(value => {
      if(value == undefined){
        return 0;
      }
      notesInText.push(NOTE_VALUE[value]);
    });
    let average = this.getAverage(notesInText);
    let difference = Math.abs(this.AVERAGE - average);
    //console.log("fitness: ", notes, "notes: ", notesInText);
    return average - difference;
  }
}

function disablePiano(){
  var tiles = document.getElementsByClassName("tile");
  for (i = 0; i < tiles.length; i++) {
    tiles[i].classList.add("disabled");
  }
  document.getElementById("melody").classList.add("disabled");
  document.getElementById("numberNotes").disabled = true;
}

function generateMelody(notes) {
  console.log(notes);
  if(document.getElementById("melody").classList.contains("disabled")){
    launchToast('Your melody is being generated!');
    return;
  }
  var numberNotes = document.getElementById("numberNotes").value;
  if (numberNotes <= 0) {
    launchToast('Type an amount of notes to play');
    return;
  }
  if (notes.length <= 0) {
    launchToast('Stroke the piano!');
    return;
  }
  launchToast('Generating your melody...');
  disablePiano();
  problema = new Chord(notes);
  cantidadParticulas = 1;
  tamanioVecindario = 1;
  iteraciones = 2000;
  dimensiones = numberNotes;
  cognitionLearningRate = 1.4944;
  socialLearningRate = 1.4944;
  spo = new SPO(
    iteraciones,
    cantidadParticulas,
    tamanioVecindario,
    dimensiones,
    cognitionLearningRate,
    socialLearningRate,
    problema,
  );
  //console.log(spo);
  spo.run();

  dimensiones = dimensiones * 2;
}