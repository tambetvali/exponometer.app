import { useState } from 'react';
import { NeuralExponometer } from '../types/exponometer';
import { Activity } from 'lucide-react';

export function NeuralLayerDemo() {
  const [inputSize] = useState(3);
  const [outputSize] = useState(3);
  const [input, setInput] = useState([1, 0.5, 0.8]);
  const [network] = useState(new NeuralExponometer(inputSize, outputSize));

  const result = network.forward(input);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Neural Layer Architecture</h2>
      </div>

      <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
        <p className="text-sm text-gray-700 mb-3">
          <strong>Three Sublayers:</strong> Each processing layer has Z (space/projection),
          X (now/projective), and Y (time/activation)
        </p>
        <div className="bg-white p-3 rounded border border-purple-300 space-y-2">
          <div className="font-mono text-xs">
            <p><strong>Input Y[t-1]</strong> → Weights₁ + Bias₁ → <strong>Z[t]</strong> (imaginary)</p>
            <p><strong>Input Y[t-1]</strong> → Weights₂ + Bias₂ → <strong>X[t]</strong> (real)</p>
            <p><strong>Z[t], X[t]</strong> → Octave Calculation → <strong>Y[t]</strong> (output)</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Input Layer (Y from previous)
        </label>
        <div className="grid grid-cols-3 gap-2">
          {input.map((val, i) => (
            <input
              key={i}
              type="number"
              value={val}
              onChange={(e) => {
                const newInput = [...input];
                newInput[i] = parseFloat(e.target.value) || 0;
                setInput(newInput);
              }}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              step="0.1"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Z Layer (Imaginary / Space)
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {result.z.map((val, i) => (
              <div key={i} className="bg-white p-2 rounded border border-blue-300 text-center">
                <p className="text-lg font-mono text-blue-700">{val.toFixed(3)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            X Layer (Real / Now)
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {result.x.map((val, i) => (
              <div key={i} className="bg-white p-2 rounded border border-green-300 text-center">
                <p className="text-lg font-mono text-green-700">{val.toFixed(3)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Octaves (Z→X acceleration)
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {result.octaves.map((val, i) => (
              <div key={i} className="bg-white p-2 rounded border border-amber-300 text-center">
                <p className="text-lg font-mono text-amber-700">{val.toFixed(3)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Y Layer (Output / Time)
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {result.y.map((val, i) => (
              <div key={i} className="bg-white p-2 rounded border border-purple-300 text-center">
                <p className="text-lg font-mono text-purple-700">{val.toFixed(3)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-300">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Processing Flow</h3>
        <div className="space-y-2 text-xs text-gray-600">
          <p>1. <strong>Preprocessor:</strong> Calculate Z and X from previous Y using separate weights/biases</p>
          <p>2. <strong>Complex Integral 1:</strong> Form complex number (Z imaginary, X real) → Calculate octave</p>
          <p>3. <strong>ZX→XY Remapping:</strong> Create second complex (X→imaginary, preserve octave)</p>
          <p>4. <strong>Complex Integral 2:</strong> Apply octave with non-linear time projection → Output Y</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-xs text-gray-700">
          <strong>E=mc² Analogy:</strong> Z corrections operate in "squared dimension" (radioactive zone)
          while X operates in normal power. They're dimensionally coherent but scale non-linearly.
        </p>
      </div>
    </div>
  );
}
