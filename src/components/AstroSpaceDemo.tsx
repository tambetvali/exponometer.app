import { useState } from 'react';
import { AstroSpace } from '../types/exponometer';
import { Rocket } from 'lucide-react';

export function AstroSpaceDemo() {
  const [value, setValue] = useState(100);
  const [velocity, setVelocity] = useState(0);
  const astro = new AstroSpace(value, 1);

  const velocityPercent = velocity * 100;
  const gamma = astro.relativisticTransform(velocity);
  const timeDilation = astro.timeDilation(velocity);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Rocket className="w-6 h-6 text-orange-600" />
        <h2 className="text-2xl font-bold text-gray-800">Astro Space (Higher)</h2>
      </div>

      <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <p className="text-sm text-gray-700 mb-3">
          <strong>Higher Space:</strong> Light speed creates boundary. Theory of relativity emerges from octave calculus and higher precision.
        </p>
        <div className="bg-white p-3 rounded border border-orange-300 space-y-1">
          <p className="font-mono text-sm">γ = 1/√(1 - v²/c²)</p>
          <p className="font-mono text-sm">E = mc²</p>
          <p className="text-xs text-gray-600 mt-2">
            Relativistic effects appear when approaching light speed limit
          </p>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Base Value: {value}
        </label>
        <input
          type="range"
          min="10"
          max="1000"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Velocity: {velocityPercent.toFixed(1)}% of c
        </label>
        <input
          type="range"
          min="0"
          max="0.99"
          step="0.01"
          value={velocity}
          onChange={(e) => setVelocity(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="relative h-64 bg-gray-50 rounded-lg border border-gray-300 p-4">
        <svg width="100%" height="100%" viewBox="0 0 500 200">
          <defs>
            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          <rect x="50" y="90" width="400" height="20" fill="#e5e7eb" rx="10" />
          <rect
            x="50"
            y="90"
            width={400 * velocity}
            height="20"
            fill="url(#speedGradient)"
            rx="10"
          />

          <line x1="450" y1="70" x2="450" y2="130" stroke="#ef4444" strokeWidth="2" />
          <text x="455" y="65" fontSize="12" fill="#ef4444">c</text>

          {velocity > 0.8 && (
            <>
              {[...Array(10)].map((_, i) => (
                <line
                  key={i}
                  x1={50 + 400 * velocity - i * 15}
                  y1="95"
                  x2={50 + 400 * velocity - i * 15 + 10}
                  y2="105"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  opacity={1 - i * 0.1}
                />
              ))}
            </>
          )}

          <circle
            cx={50 + 400 * velocity}
            cy="100"
            r="15"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-xs text-gray-600 mb-1">Lorentz Factor (γ)</p>
          <p className="text-2xl font-bold text-orange-700">
            {gamma.toFixed(3)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Mass/Energy increase</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-xs text-gray-600 mb-1">Time Dilation</p>
          <p className="text-2xl font-bold text-orange-700">
            {timeDilation.toFixed(3)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Time flows slower</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-xs text-gray-600 mb-1">Limit Value</p>
          <p className="text-2xl font-bold text-orange-700">c</p>
          <p className="text-xs text-gray-500 mt-1">Speed of light</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-xs text-gray-700">
          <strong>Octave Calculus:</strong> Project unit-value relation to higher octave.
          This is data precision of the net, not floating-point precision.
        </p>
      </div>
    </div>
  );
}
