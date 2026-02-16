export function TheorySection() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Mathematical Foundations</h2>

      <div className="space-y-6">
        <section className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">1. Exponometer as Natural Number</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              An exponometer is a complex number where the <strong>imaginary part (Z)</strong> acts
              as a projector and the <strong>real part (X)</strong> represents the projected shape.
            </p>
            <div className="bg-white p-3 rounded border border-blue-300 my-2">
              <p className="font-mono text-center mb-2">base(step)unit = result</p>
              <p className="font-mono text-center">2(1)2 = 2 (linear)</p>
              <p className="font-mono text-center">2(0.5)2 = 1 (logarithmic)</p>
              <p className="font-mono text-center">2(2)4 = 4 (exponential)</p>
            </div>
            <p>
              The <strong>octave n</strong> is calculated as: n = log(X) / log(Z)
            </p>
            <p>
              This gives us a "direction" and "acceleration factor" that can be exponential, linear, logarithmic, etc.
            </p>
          </div>
        </section>

        <section className="p-4 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-3">2. Quantum Space (Lower Dimension)</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              From any number to zero, there exist <strong>discrete quantum steps</strong>.
              Zero itself appears at "atom size" in normal space.
            </p>
            <div className="bg-white p-3 rounded border border-green-300 my-2">
              <p className="font-mono">ψ(x,t) = A·sin(kx - ωt)·exp(-x²/2σ²)</p>
              <p className="text-xs text-gray-600 mt-1">Wave function with uncertainty</p>
            </div>
            <p>
              <strong>Topologically distinct:</strong> By Hilbert space requirements, we need
              more dimensions to fully represent this projection. Quantum weirdness emerges
              because projections are never linear in space, time, or value dimensions.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Uncertainty principle: Δx·Δp ≥ ℏ/2</li>
              <li>Superposition states until measurement</li>
              <li>Non-commutative operations</li>
            </ul>
          </div>
        </section>

        <section className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-900 mb-3">3. Astro Space (Higher Dimension)</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Space bubble and light speed create boundaries. All operations reflect
              <strong> theory of relativity</strong> when viewed from higher space.
            </p>
            <div className="bg-white p-3 rounded border border-orange-300 my-2">
              <p className="font-mono">γ = 1/√(1 - v²/c²)</p>
              <p className="font-mono">E = mc²</p>
              <p className="text-xs text-gray-600 mt-1">Lorentz transformation and mass-energy equivalence</p>
            </div>
            <p>
              <strong>Octave Calculus:</strong> We reach higher space by projecting the
              unit-value relation to a higher octave. This is about <em>data precision</em> of
              the measurement net, not floating-point precision.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Light speed c is the limit value in this space</li>
              <li>Time dilation at high velocities</li>
              <li>Length contraction in direction of motion</li>
              <li>Limit value in lower space (zero) is different from higher space limit (c)</li>
            </ul>
          </div>
        </section>

        <section className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">4. Hilbert Projection Theorem</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Lower-Higher Space Relationship:</strong>
            </p>
            <div className="bg-white p-3 rounded border border-purple-300 my-2 space-y-2">
              <p><strong>Quantitative:</strong> Linear space is lower, exponential space is higher</p>
              <p><strong>Qualitative:</strong> Individual spaces are lower, their union is higher</p>
            </div>
            <p>
              Both relate to Hilbert's claim: <em>We cannot project higher dimensional space to
              lower without losing information</em> (order, position, relationships).
            </p>
            <p>
              In qualitative version, when we zoom in and out, Z and X corrections don't map linearly
              regarding scale. They can switch places - this is the <strong>"complex relativity"</strong> of
              the exponometer system.
            </p>
          </div>
        </section>

        <section className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold text-indigo-900 mb-3">5. Neural Network Implications</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Replacing single variables with complex pairs (Z, X) in neural networks:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Z (imaginary):</strong> Space, projection layer - first weight set</li>
              <li><strong>X (real):</strong> Now, projective layer - second weight set</li>
              <li><strong>Y (output):</strong> Time, activation - computed from Z, X via octave</li>
            </ul>
            <div className="bg-white p-3 rounded border border-indigo-300 my-2">
              <p className="font-mono text-sm">Y = X · Z^(n-1)</p>
              <p className="text-xs text-gray-600 mt-1">where n = log(X)/log(Z) is the octave</p>
            </div>
            <p>
              <strong>Backpropagation:</strong> First-order gradient for X weights, but
              second-order (E=mc² analog) for Z weights - they operate in different dimensional densities.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
