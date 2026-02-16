import { useState, useEffect } from 'react';
import { Exponometer, QuantumSpace, AstroSpace } from '../types/exponometer';
import { Activity, Zap, Atom, Rocket } from 'lucide-react';

export function ExponometerDemo() {
  const [baseZ, setBaseZ] = useState(2);
  const [valueX, setValueX] = useState(2);
  const [steps, setSteps] = useState(1);
  const [exp, setExp] = useState<Exponometer | null>(null);

  useEffect(() => {
    setExp(new Exponometer(baseZ, valueX));
  }, [baseZ, valueX]);

  const examples = [
    { z: 2, x: 2, desc: "Linear: Z=X" },
    { z: 2, x: 4, desc: "Exponential: X > Z" },
    { z: 2, x: Math.sqrt(2), desc: "Logarithmic: X < Z" },
    { z: 0, x: 5, desc: "Constant: Z=0" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Exponometer Number</h2>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700 mb-2">
          An <strong>Exponometer</strong> is a complex number representing acceleration:
        </p>
        <div className="font-mono text-center text-lg my-3">
          Z(n)X = Y
        </div>
        <p className="text-xs text-gray-600">
          Where <strong>Z</strong> (imaginary) is the projector, <strong>X</strong> (real) is the shape,
          and <strong>n</strong> determines the octave/acceleration type
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Z (Projector / Imaginary)
          </label>
          <input
            type="number"
            value={baseZ}
            onChange={(e) => setBaseZ(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            X (Shape / Real)
          </label>
          <input
            type="number"
            value={valueX}
            onChange={(e) => setValueX(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            step="0.1"
          />
        </div>
      </div>

      {exp && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-xs text-gray-600">Octave (n)</p>
              <p className="text-2xl font-bold text-blue-700">{exp.octave.toFixed(3)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Acceleration Type</p>
              <p className="text-lg font-semibold text-indigo-700">{exp.getAccelerationType()}</p>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Steps (n): {steps}
            </label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={steps}
              onChange={(e) => setSteps(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="mt-2 p-3 bg-white rounded border border-gray-200">
              <p className="text-sm text-gray-600">Result at step {steps.toFixed(1)}:</p>
              <p className="text-xl font-bold text-blue-800">{exp.apply(steps).toFixed(3)}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => {
              setBaseZ(ex.z);
              setValueX(ex.x);
            }}
            className="p-3 text-left border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-colors"
          >
            <p className="text-xs text-gray-600">{ex.desc}</p>
            <p className="font-mono text-sm text-gray-800">Z={ex.z}, X={ex.x.toFixed(2)}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
