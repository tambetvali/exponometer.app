import { useState, useEffect } from 'react';
import { QuantumSpace } from '../types/exponometer';
import { Atom } from 'lucide-react';

export function QuantumSpaceDemo() {
  const [value, setValue] = useState(10);
  const [time, setTime] = useState(0);
  const quantum = new QuantumSpace(value, 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => (t + 0.1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const positions = Array.from({ length: 50 }, (_, i) => i * 2);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Atom className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Quantum Space (Lower)</h2>
      </div>

      <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm text-gray-700 mb-3">
          <strong>Lower Space:</strong> From number to zero, quantum effects emerge. Space becomes topologically distinct with non-linear projections.
        </p>
        <div className="bg-white p-3 rounded border border-green-300">
          <p className="font-mono text-sm mb-2">ψ(x,t) = A·sin(kx - ωt)·exp(-x²/2σ²)</p>
          <p className="text-xs text-gray-600">
            Wave function shows quantum superposition and uncertainty principle
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Value (Classical): {value}
        </label>
        <input
          type="range"
          min="1"
          max="20"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="w-full mb-4"
        />
      </div>

      <div className="relative h-64 bg-gray-50 rounded-lg border border-gray-300 overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 500 250">
          <line x1="0" y1="125" x2="500" y2="125" stroke="#ccc" strokeWidth="1" />
          <line x1="250" y1="0" x2="250" y2="250" stroke="#ccc" strokeWidth="1" />

          <path
            d={positions.map((pos, i) => {
              const x = (pos / 100) * 500;
              const waveValue = quantum.waveFunction(pos, time);
              const y = 125 - waveValue * 100;
              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />

          {positions.filter((_, i) => i % 5 === 0).map((pos, i) => {
            const uncertainty = quantum.getUncertainty(pos - 50);
            const x = (pos / 100) * 500;
            return (
              <circle
                key={i}
                cx={x}
                cy={125}
                r={uncertainty * 8}
                fill="rgba(16, 185, 129, 0.2)"
                stroke="#10b981"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 p-2 rounded text-xs">
          <p className="font-semibold">Zero (Atom size) →</p>
          <p className="text-gray-600">Uncertainty increases near zero</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="p-3 bg-green-50 rounded border border-green-200">
          <p className="text-xs text-gray-600">Quantum Steps</p>
          <p className="text-lg font-bold text-green-700">100</p>
        </div>
        <div className="p-3 bg-green-50 rounded border border-green-200">
          <p className="text-xs text-gray-600">Uncertainty</p>
          <p className="text-lg font-bold text-green-700">High → 0</p>
        </div>
        <div className="p-3 bg-green-50 rounded border border-green-200">
          <p className="text-xs text-gray-600">Dimension</p>
          <p className="text-lg font-bold text-green-700">Hilbert</p>
        </div>
      </div>
    </div>
  );
}
