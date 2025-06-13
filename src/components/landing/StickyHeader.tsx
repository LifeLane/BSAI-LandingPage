"use client";

import React, { useEffect, useState } from 'react';

// Removed useRef and particle animation imports

// For letter-by-letter, a dedicated animation or approach is needed.
// We'll use a simple word-by-word fade-in with sequential delays for a similar effect
// and ensure it fits within standard Tailwind capabilities.

const ctaPhrases = [
  { text: "Limited Time Offer:", color: "text-yellow-300" }, // Use a different color for emphasis
  { text: "Explore QuantumGPT,", color: "text-primary" }, // Use primary color
  { text: "The 1st Quantum-Powered AI Trade Analyst!", color: "text-white" },
  { text: "Perform 3 Searches Absolutely FREE!", color: "text-green-400" }, // Use a catchy color
  { text: "✨", color: "text-yellow-300" },
];

export default function StickyHeader() {
  // State and effect hooks related to particle animation are removed.

  return (
    // Removed sticky top-0 z-50, added a background color
    <div className="w-full bg-gray-900 text-white text-center py-3 shadow-lg overflow-hidden relative flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 relative z-10 text-base"> {/* Use flex-wrap for smaller screens */}
        {ctaPhrases.map((phrase, phraseIndex) => (
          <span key={phraseIndex} className={`inline-block ${phrase.color} font-medium`}>
            {phrase.text.split(' ').map((word, wordIndex, arr) => (
                 // Applying animation and delay to each word
                <span
                    key={wordIndex}
                    className={`inline-block animate-fade-in duration-700`}
                    style={{ animationDelay: `${(phraseIndex * 0.5) + (wordIndex * 0.1)}s` }} // Sequential delay
                >
                    {word}{wordIndex < arr.length - 1 ? ' ' : ''} {/* Add space back between words */}
                </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
