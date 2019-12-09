
class INDIVIDUAL {
  constructor(vel, dim, problem) {
    this._neighbors = [];
    this._bestPosition = Array.from({ length: dim }, () => Math.round(Math.random() * 11));
    this._position = Array.from({ length: dim }, () => Math.round(Math.random() * 11));
    this._velocity = vel;
    this._bestFitness = 0;
    this._fitness = 0;
  }
}
class SPO {
  // V = velocity
  // O = neighborhoodSize
  // Q1 = cognitionLearningRate
  // Q2 = socialLearningRate
  constructor(i, p, o, n, q1, q2, problem) {
    this._iterations = i;
    this._problem = problem;
    this._socialLearningRate = q2;
    this._cognitionLearningRate = q1;
    this._maxVelocity = 5;//problem.MAX_VALUE;
    this._minVelocity = -5;//problem.MIN_VALUE;
    this._neighborhood = o;
    this._individuals = [];
    this._particles = p;
    this._dimensions = n;
    this._bestGlobalFitness = 0;
    this._bestGlobalPosition = Array.from({ length: n }, () => Math.round(Math.random() * 11));
  }
  

  updateNotesCanvas(){
    console.log("this._bestGlobalPosition", this._bestGlobalPosition);
    console.log("length: ",this._dimensions);
    for (let i = 0; i < this._dimensions; i++) {
      console.log(this._bestGlobalPosition[i]); 
      console.log("note_value",NOTE_VALUE[this._bestGlobalPosition[i]]);
      //Add the generated notes to the canvas
      playNote(NOTE_VALUE[this._bestGlobalPosition[i]].nombre, true); //listo arregle el bug xd
    }
    setTimeout(function () { launchToast('Your melody is ready!'); playSong(notas);showDownloadSong();}, 100);
  }

  run() {
    this.initializeIndividuals();
    this.createNeighborhood();
    //console.log(this._individuals);
    let generation = 0;
      //console.log("iterations: ", this._iterations);
    while (generation < this._iterations) {
      //for (particle in this._individuals) { 
      this._individuals.forEach(particle => {
        //console.log("particle: ", particle);
        for (let dimension = 0; dimension < this._dimensions; dimension++) {
          // calculate the velocity factors
          ///posible fallo aqui, habra que comprobar:
          particle._velocity[dimension] = Math.round(((particle._velocity[dimension]) +
            (this._cognitionLearningRate * (
              particle._bestPosition[dimension] -
              particle._position[dimension])) +
            (this._socialLearningRate * (
              this._bestGlobalPosition[dimension] -
              particle._position[dimension]))));
          //////hasta aqui /\
          if (particle._velocity[dimension] > this._maxVelocity) {
            particle._velocity[dimension] = this._maxVelocity;
          }
          else if (particle._velocity[dimension] < this._minVelocity) {
            particle._velocity[dimension] = this._minVelocity;
          }
          particle._position[dimension] = (Math.abs(particle._position[dimension] + particle._velocity[dimension])) % 11;
        }
        //console.log("particle", particle);
        // falta definir el fitness y elegir la mejor posicion hasta el momento
        particle._fitness = this.getFitness(particle._position);
        if (particle._fitness > particle._bestFitness) {
          particle._bestFitness = particle._fitness;
          particle._bestPosition = particle._position;
        }
        if (particle._bestFitness > this._bestGlobalFitness) {
          this._bestGlobalFitness = particle._bestFitness;
          this._bestGlobalPosition = Object.assign({}, particle._bestPosition);
        }
      });
      console.log("Generacion: ", generation, " Mejor posicion: ", this._bestGlobalPosition, ", Mejor fitness: ", this._bestGlobalFitness);
      generation++;
    }
    console.log("Generacion: ", generation, " Mejor posicion: ", this._bestGlobalPosition, ", Mejor fitness: ", this._bestGlobalFitness);
    //Update the notes canvas
    this.updateNotesCanvas();
  }

  
  initializeIndividuals() {
    for (let i = 0; i < this._particles; i++) {
      let velocity = Array.from({ length: this._dimensions }, () => Math.round(Math.random() * 11));
      let individual = new INDIVIDUAL(velocity, this._dimensions, this._problem);
      this._individuals.push(individual);
    }
  }

  
  createNeighborhood() {
    for (let i = 0; i < this._particles; i++) {
      for (let j = 0; j < this._neighborhood; j++) {
        let pos = i + 1 + j;
        this._individuals[i]._neighbors.push(this._individuals[pos % this._neighborhood]);
      }
    }
  }

  
  getBestFitness(nearest_neighbors) {
    let best = nearest_neighbors[0].bestFitness;
    nearest_neighbors.forEach(i => {
      if (i.bestFitness < best) {
        best = i.bestFitness;
      }
    });
    return best;
  }

  
  getFitness(particle) {
    //console.log("particle: ", particle);
    return this._problem.fitness(particle);
  }
}