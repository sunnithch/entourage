import React from 'react';

// FilterPanel.tsx
export function FilterPanel() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium text-stone-900 mb-4">
          Personality Traits
        </h3>
        <div className="space-y-2">
          {['Elegant', 'Sociable', 'Sophisticated', 'Charismatic'].map((trait) => (
            <label key={trait} className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-stone-200 text-stone-900 
                         focus:ring-stone-900 transition-colors"
              />
              <span className="ml-2 text-sm text-stone-600">{trait}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-stone-900 mb-4">Price Range</h3>
        <div className="space-y-2">
          <input
            type="number"
            placeholder="Min price"
            className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm"
          />
          <input
            type="number"
            placeholder="Max price"
            className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-stone-900 mb-4">Date</h3>
        <input
          type="date"
          className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm"
        />
      </div>

      <button className="w-full px-4 py-2 text-sm text-stone-600 hover:text-stone-900 
                       transition-colors">
        Reset Filters
      </button>
    </div>
  );
}