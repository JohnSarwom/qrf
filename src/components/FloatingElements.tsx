
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-white/20 rounded-full particle animate-stagger-${i + 1}`}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + i * 2}s`
          }}
        />
      ))}

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-xl animate-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rotate-45 animate-float" 
           style={{ animationDelay: '3s' }} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default FloatingElements;
