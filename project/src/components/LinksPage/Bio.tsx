import React from 'react';
import { Calendar } from 'lucide-react';

export function Bio() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-white mb-4">Evan Musick</h1>
      <div className="flex items-center justify-center gap-2 text-emerald-400 mb-4">
        <Calendar className="w-5 h-5" />
        <span>365 Days of Code Challenge 2025</span>
      </div>
      <p className="text-gray-300 max-w-md mx-auto">
        Join me on my journey as I code every day in 2025, building projects and sharing my progress with the developer community.
      </p>
    </div>
  );
}