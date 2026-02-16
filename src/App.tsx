import { useState } from 'react';
import { ExponometerDemo } from './components/ExponomerterDemo';
import { QuantumSpaceDemo } from './components/QuantumSpaceDemo';
import { AstroSpaceDemo } from './components/AstroSpaceDemo';
import { NeuralLayerDemo } from './components/NeuralLayerDemo';
import { TheorySection } from './components/TheorySection';
import { BookOpen, Code } from 'lucide-react';

function App() {
  const [showCode, setShowCode] = useState(false);

  const codeSnippet = `// Exponometer: Accelerative Number System
class Exponometer {
  constructor(z, x) {
    this.z = z;  // Imaginary: projector
    this.x = x;  // Real: shape
    this.octave = Math.log(Math.abs(x)) / Math.log(Math.abs(z));
  }

  apply(steps) {
    return this.x * Math.pow(this.z, (this.octave - 1) * steps);
  }
}

// Examples:
new Exponometer(2, 2).octave;     // 1 (linear)
new Exponometer(2, 4).octave;     // 2 (exponential)
new Exponometer(2, Math.sqrt(2)); // 0.5 (logarithmic)

// Neural Layer with Z, X, Y sublayers
class NeuralExponometer {
  forward(yPrev) {
    const z = matmul(yPrev, weightsZ, biasesZ);  // Space
    const x = matmul(yPrev, weightsX, biasesX);  // Now
    const octaves = z.map((zi, i) =>
      Math.log(Math.abs(x[i])) / Math.log(Math.abs(zi))
    );
    const y = x.map((xi, i) =>
      xi * Math.pow(Math.abs(z[i]), octaves[i] - 1)
    );
    return { z, x, y, octaves };
  }
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Exponometer: Accelerative Number Theory
              </h1>
              <p className="text-gray-600 mt-1">
                Complex numbers as projective systems connecting quantum and relativistic spaces
              </p>
            </div>
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showCode ? <BookOpen className="w-5 h-5" /> : <Code className="w-5 h-5" />}
              {showCode ? 'Show Theory' : 'Show Code'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {showCode ? (
          <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <pre>{codeSnippet}</pre>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExponometerDemo />
            <NeuralLayerDemo />
            <QuantumSpaceDemo />
            <AstroSpaceDemo />
            <div className="lg:col-span-2">
              <TheorySection />
            </div>
          </div>
        )}

        <footer className="mt-12 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Exponometers</strong> are natural numbers formed from complex pairs (Z, X) where
              Z projects into X with an acceleration factor (octave). This creates a unified framework for:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Quantum Space:</strong> Lower dimension where zero is atomic, non-linear projections create uncertainty</li>
              <li><strong>Classical Space:</strong> Our operational space with linear and exponential relationships</li>
              <li><strong>Astro Space:</strong> Higher dimension where light speed is the limit, relativity emerges naturally</li>
            </ul>
            <p className="mt-3">
              In neural networks, replacing single variables with Z-X pairs and computing Y through octave
              projection creates networks that naturally encode acceleration, time, and dimensional coherence.
              Backpropagation operates in different dimensional densities (E=mc² analog) for Z vs X corrections.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
