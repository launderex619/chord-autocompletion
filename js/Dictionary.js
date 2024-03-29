const DO = { // 261,626
  "do": 100.0,       // 261,626
  "re": 87.75,       // 293,665
  "re_b": 94.05,     // 277,183
  "mi": 74.00,       // 329,628
  "mi_b": 81.07,     // 311,127
  "fa": 66.74,       // 174,614
  "sol": 74.91,      // 195,998
  "sol_b": 70.71,    // 184,997
  "la": 84.08,       // 220,000
  "la_b": 79.36,     // 207,652
  "si": 94.38,       // 246,942
  "si_b": 89.08,     // 233,082
}

const RE = { // 293,665 
  "do": 89.08,       // 261,626
  "re": 100.0,       // 293,665
  "re_b": 94.38,     // 277,183
  "mi": 87.75,       // 329,628
  "mi_b": 94.05,     // 311,127
  "fa": 59.46,       // 174,614
  "sol": 66.74,      // 195,998
  "sol_b": 63.00,    // 184,997
  "la": 74.92,       // 220,000
  "la_b": 70.71,     // 207,652
  "si": 84.09,       // 246,942
  "si_b": 79.37,     // 233,082
}

const RE_B = { // 277,183
  "do": 94.38,       // 261,626
  "re": 94.05,       // 293,665
  "re_b": 100.0,     // 277,183
  "mi": 81.07,       // 329,628
  "mi_b": 87.75,     // 311,127
  "fa": 62.99,       // 174,614
  "sol": 70.71,      // 195,998
  "sol_b": 66.74,    // 184,997
  "la": 79.36,       // 220,000
  "la_b": 74.91,     // 207,652
  "si": 89.08,       // 246,942
  "si_b": 84.08,     // 233,082
}

const MI = { //329,628
  "do": 79.37,       // 261,626
  "re": 89.08,       // 293,665
  "re_b": 84.08,     // 277,183
  "mi": 100.0,       // 329,628
  "mi_b": 94.38,     // 311,127
  "fa": 52.97,       // 174,614
  "sol": 59.46,      // 195,998
  "sol_b": 56.12,    // 184,997
  "la": 66.74,       // 220,000
  "la_b": 62.99,     // 207,652
  "si": 74.91,       // 246,942
  "si_b": 70.71,     // 233,082
}

const MI_B = { //311,127
  "do": 84.09,       // 261,626
  "re": 94.39,       // 293,665
  "re_b": 89.09,     // 277,183
  "mi": 94.05,       // 329,628
  "mi_b": 100.00,     // 311,127
  "fa": 56.12,       // 174,614
  "sol": 63.00,      // 195,998
  "sol_b": 59.46,    // 184,997
  "la": 70.71,       // 220,000
  "la_b": 66.74,     // 207,652
  "si": 79.37,       // 246,942
  "si_b": 74.92,     // 233,082
}

const FA = { //	174,614
  "do": 50.17,       // 261,626
  "re": 31.82,       // 293,665
  "re_b": 41.26,     // 277,183
  "mi": 11.22,       // 329,628
  "mi_b": 21.82,     // 311,127
  "fa": 100.00,       // 174,614
  "sol": 87.75,      // 195,998
  "sol_b": 94.05,    // 184,997
  "la": 74.01,       // 220,000
  "la_b": 81.08,     // 207,652
  "si": 58.58,       // 246,942
  "si_b": 66.52,     // 233,082
}

const SOL = { // 195,998
  "do": 66.52,       // 261,626
  "re": 50.17,       // 293,665
  "re_b": 58.58,     // 277,183
  "mi": 31.82,       // 329,628
  "mi_b": 41.26,     // 311,127
  "fa": 89.09,       // 174,614
  "sol": 100.00,      // 195,998
  "sol_b": 94.39,    // 184,997
  "la": 87.75,       // 220,000
  "la_b": 94.05,     // 207,652
  "si": 74.01,       // 246,942
  "si_b": 81.08,     // 233,082
}

const SOL_B = { //	184,997
  "do": 58.58,       // 261,626
  "re": 41.26,       // 293,665
  "re_b": 50.17,     // 277,183
  "mi": 21.82,       // 329,628
  "mi_b": 31.82,     // 311,127
  "fa": 94.39,       // 174,614
  "sol": 94.05,      // 195,998
  "sol_b": 100.00,    // 184,997
  "la": 81.08,       // 220,000
  "la_b": 87.75,     // 207,652
  "si": 66.52,       // 246,942
  "si_b": 74.01,     // 233,082
}

const LA = { // 220,000
  "do": 81.08,       // 261,626
  "re": 66.52,       // 293,665
  "re_b": 74.01,     // 277,183
  "mi": 50.17,       // 329,628
  "mi_b": 58.58,     // 311,127
  "fa": 79.37,       // 174,614
  "sol": 89.09,      // 195,998
  "sol_b": 84.09,    // 184,997
  "la": 100.00,       // 220,000
  "la_b": 94.39,     // 207,652
  "si": 87.75,       // 246,942
  "si_b": 94.05,     // 233,082
}

const LA_B = { // 207,652
  "do": 74.01,       // 261,626
  "re": 58.58,       // 293,665
  "re_b": 66.52,     // 277,183
  "mi": 41.26,       // 329,628
  "mi_b": 50.17,     // 311,127
  "fa": 84.09,       // 174,614
  "sol": 94.39,      // 195,998
  "sol_b": 89.09,    // 184,997
  "la": 94.05,       // 220,000
  "la_b": 100.00,     // 207,652
  "si": 81.08,       // 246,942
  "si_b": 87.75,     // 233,082
}

const SI = { //246,942
  "do": 94.05,       // 261,626
  "re": 81.08,       // 293,665
  "re_b": 87.75,     // 277,183
  "mi": 66.52,       // 329,628
  "mi_b": 74.01,     // 311,127
  "fa": 70.71,       // 174,614
  "sol": 79.37,      // 195,998
  "sol_b": 74.92,    // 184,997
  "la": 89.09,       // 220,000
  "la_b": 84.09,     // 207,652
  "si": 100.00,       // 246,942
  "si_b": 94.39,     // 233,082
}

const SI_B = { // 233,082
  "do": 87.75,       // 261,626
  "re": 74.01,       // 293,665
  "re_b": 81.08,     // 277,183
  "mi": 58.58,       // 329,628
  "mi_b": 66.52,     // 311,127
  "fa": 74.92,       // 174,614
  "sol": 84.09,      // 195,998
  "sol_b": 79.37,    // 184,997
  "la": 94.39,       // 220,000
  "la_b": 89.09,     // 207,652
  "si": 94.05,       // 246,942
  "si_b": 100.00,     // 233,082
}

const NOTE_TYPE = {
  "fa": FA,
  "sol_b": SOL_B,
  "sol": SOL,
  "la_b": LA_B,
  "la": LA,
  "si_b": SI_B,
  "si": SI,
  "do": DO,
  "re_b": RE_B,
  "re": RE,
  "mi_b": MI_B,
  "mi": MI
}

const NOTE_VALUE = [
  {nombre: "fa", sonido: "F4"},
  {nombre: "sol_b", sonido: "F#4"},
  {nombre: "sol", sonido: "G4"},
  {nombre: "la_b", sonido: "G#4"},
  {nombre: "la", sonido: "A4"},
  {nombre: "si_b", sonido: "A#4"},
  {nombre: "si", sonido: "B4"},
  {nombre: "do", sonido:  "C5"},
  {nombre: "re_b", sonido: "C#5"},
  {nombre: "re", sonido: "D5"},
  {nombre: "mi_b", sonido: "D#5"},
  {nombre: "mi", sonido: "E5"},
]