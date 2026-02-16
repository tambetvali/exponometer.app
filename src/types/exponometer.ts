export class Exponometer {
  z: number;
  x: number;
  octave: number;

  constructor(z: number, x: number) {
    this.z = z;
    this.x = x;
    this.octave = this.calculateOctave();
  }

  private calculateOctave(): number {
    if (this.z === 0) return 0;
    if (this.x === 0) return -Infinity;

    return Math.log(Math.abs(this.x)) / Math.log(Math.abs(this.z));
  }

  apply(steps: number): number {
    if (this.octave === 0) return this.x;
    if (this.octave === 1) return this.x * steps;

    return this.x * Math.pow(this.z, (this.octave - 1) * steps);
  }

  projectToY(): number {
    return this.x * Math.pow(this.z, this.octave - 1);
  }

  getAccelerationType(): string {
    if (Math.abs(this.octave) < 0.1) return "constant";
    if (Math.abs(this.octave - 0.5) < 0.1) return "logarithmic";
    if (Math.abs(this.octave - 1) < 0.1) return "linear";
    if (this.octave > 1) return "exponential";
    if (this.octave < 0.5) return "sub-logarithmic";
    return "super-linear";
  }

  toComplex(): { real: number; imaginary: number } {
    return { real: this.x, imaginary: this.z };
  }

  static fromFunction(base: number, step: number, unit: number): Exponometer {
    const octave = Math.log(unit / base) / Math.log(step);
    return new Exponometer(base, base * Math.pow(step, octave - 1));
  }
}

export class QuantumSpace {
  value: number;
  steps: number;

  constructor(value: number, steps: number = 100) {
    this.value = value;
    this.steps = steps;
  }

  projectToLower(position: number): number {
    const ratio = position / this.steps;
    const quantumScale = this.value * ratio;

    return quantumScale * (1 + 0.1 * Math.sin(position * Math.PI / 10));
  }

  getUncertainty(position: number): number {
    const proximity = Math.abs(position) / this.steps;
    return 1 / (1 + proximity * 10);
  }

  waveFunction(position: number, time: number): number {
    const k = 2 * Math.PI / this.steps;
    const omega = k * k / 2;
    return Math.sin(k * position - omega * time) * Math.exp(-position * position / (2 * this.steps * this.steps));
  }
}

export class AstroSpace {
  value: number;
  lightSpeed: number;
  spaceBubble: number;

  constructor(value: number, lightSpeed: number = 299792458) {
    this.value = value;
    this.lightSpeed = lightSpeed;
    this.spaceBubble = value * lightSpeed;
  }

  relativisticTransform(velocity: number): number {
    const beta = velocity / this.lightSpeed;
    const gamma = 1 / Math.sqrt(1 - beta * beta);
    return this.value * gamma;
  }

  timeDilation(velocity: number): number {
    const beta = velocity / this.lightSpeed;
    return Math.sqrt(1 - beta * beta);
  }

  projectToHigher(): number {
    return this.value * Math.log(1 + this.value / this.lightSpeed);
  }

  getLimitValue(): number {
    return this.lightSpeed;
  }
}

export class NeuralExponometer {
  weightsZ: number[][];
  weightsX: number[][];
  biasesZ: number[];
  biasesX: number[];

  constructor(inputSize: number, outputSize: number) {
    this.weightsZ = this.initializeMatrix(inputSize, outputSize);
    this.weightsX = this.initializeMatrix(inputSize, outputSize);
    this.biasesZ = Array(outputSize).fill(0).map(() => Math.random() * 0.1);
    this.biasesX = Array(outputSize).fill(0).map(() => Math.random() * 0.1);
  }

  private initializeMatrix(rows: number, cols: number): number[][] {
    return Array(rows).fill(0).map(() =>
      Array(cols).fill(0).map(() => (Math.random() - 0.5) * 0.2)
    );
  }

  forward(yPrev: number[]): { z: number[], x: number[], y: number[], octaves: number[] } {
    const z = this.matmul(yPrev, this.weightsZ, this.biasesZ);
    const x = this.matmul(yPrev, this.weightsX, this.biasesX);

    const octaves = z.map((zi, i) => {
      if (zi === 0) return 0;
      return Math.log(Math.abs(x[i])) / Math.log(Math.abs(zi) + 1e-10);
    });

    const y = x.map((xi, i) => {
      const oct = octaves[i];
      return xi * Math.pow(Math.abs(z[i]) + 1, oct - 1);
    });

    return { z, x, y, octaves };
  }

  private matmul(input: number[], weights: number[][], biases: number[]): number[] {
    const output = Array(biases.length).fill(0);
    for (let i = 0; i < biases.length; i++) {
      let sum = biases[i];
      for (let j = 0; j < input.length; j++) {
        sum += input[j] * weights[j][i];
      }
      output[i] = sum;
    }
    return output;
  }
}
