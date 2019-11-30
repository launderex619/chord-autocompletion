class Chord {
  constructor(notes) {
    this.AVERAGE = this.getAverage(notes);
    this.MIN_VALUE = this.AVERAGE - 10.0;
    this.MAX_VALUE = this.AVERAGE + 10.0;
  }
 //Obtains the average from the chords based in its proximity
  getAverage(notes) {
    let average = 0;
    for (let i = 1; i < notes.length; i++) {
      let note = NOTE_TYPE[notes[i - 1].nombre];
      average += note[notes[i].nombre];
    }
    average = average / notes.length;
    return average;
  }

//aqui llegan las posiciones

/*
https://aggie.io/_d_cyumrye creo que esta si

Entonces quedamos que como fuerza bruta solo generando notas a lo wey hasta que la suma de todas ellas este entre el valor estimado dado por el promedio del input, no?

por ejemplo:
input: [do, re, do, fa, si] --> promedio 63 (es un ejemplo no es el valor real)
notas estimadas: 10

ejecuciones: 
[do, re, do, fa, si]    
[do, fa, si, fa_b, la]  ->61
[re, sol, si, fa_b, la] -> 50
....
[mi, fa, sol, mi_b, do]   -> 73 

output:
[mi, fa, sol, mi_b, do]

fui a cenar xd, regreso en 2 horas mas o menos. 
*/
  fitness(notes) {  
    /*
    let average = 0;
    for(let i = 0; i < notes.length; i++){
      average += notes[i];
    }
    return average / notes.length;
  }
  */
    let average = 0;
    for(let i = 0; i < notes.length; i++){
      average += notes[i];
    }
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
    spo = new SPO(
      iteraciones,
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