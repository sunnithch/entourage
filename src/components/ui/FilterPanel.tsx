import React from 'react';

export function FilterPanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div>
        <h3 className="text-lg font-medium text-stone-900 mb-4">Personality Traits</h3>
        <div className="grid grid-cols-2 gap-3">
          {['Elegant', 'Sociable', 'Sophisticated', 'Charismatic'].map((trait) => (
            <label key={trait} className="flex items-center">
              <input type="checkbox" className="rounded border-stone-300 text-sage-600 focus:ring-sage-500" />
              <span className="ml-2 text-stone-600">{trait}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-stone-900 mb-4">Price Range</h3>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min"
            className="w-24 rounded-lg border border-stone-300 px-3 py-2"
          />
          <span className="text-stone-400">to</span>
          <input
            type="number"
            placeholder="Max"
            className="w-24 rounded-lg border border-stone-300 px-3 py-2"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-stone-900 mb-4">Availability</h3>
        <input
          type="date"
          className="w-full rounded-lg border border-stone-300 px-3 py-2"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 text-stone-600 hover:text-stone-900">
          Reset
        </button>
        <button className="px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700">
          Apply Filters
        </button>
      </div>
    </div>
  );
}