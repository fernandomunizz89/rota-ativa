import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Globe Grid */}
        <circle cx="100" cy="100" r="60" stroke="#C19A5B" strokeWidth="2" />
        <ellipse cx="100" cy="100" rx="30" ry="60" stroke="#C19A5B" strokeWidth="1.5" />
        <line x1="100" y1="40" x2="100" y2="160" stroke="#C19A5B" strokeWidth="1.5" />
        <line x1="40" y1="100" x2="160" y2="100" stroke="#C19A5B" strokeWidth="1.5" />
        <path d="M55 70C70 85 130 85 145 70" stroke="#C19A5B" strokeWidth="1" />
        <path d="M55 130C70 115 130 115 145 130" stroke="#C19A5B" strokeWidth="1" />
        
        {/* Sparkles */}
        <path d="M140 60L145 50L150 60L160 65L150 70L145 80L140 70L130 65L140 60Z" fill="#C19A5B" />
        <path d="M40 120L45 110L50 120L60 125L50 130L45 140L40 130L30 125L40 120Z" fill="#C19A5B" />
        <circle cx="80" cy="50" r="3" fill="#C19A5B" />
        <circle cx="120" cy="150" r="3" fill="#C19A5B" />

        {/* Curved Text Placeholder (SVG Text Path) */}
        <path id="curve" d="M 40,100 A 60,60 0 1,1 160,100" fill="transparent" />
        <text className="font-serif text-[14px] fill-[#C19A5B] uppercase tracking-[0.2em]">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            Rota Ativa
          </textPath>
        </text>
        
        <path id="curve-bottom" d="M 40,100 A 60,60 0 1,0 160,100" fill="transparent" />
        <text className="font-sans text-[8px] fill-[#C19A5B] uppercase tracking-[0.1em]">
          <textPath href="#curve-bottom" startOffset="50%" textAnchor="middle">
            Mediação Imobiliária
          </textPath>
        </text>
      </svg>
    </div>
  );
};
