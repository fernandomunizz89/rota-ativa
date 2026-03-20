import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img 
        src="/logo.svg" 
        alt="Rota Ativa Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
