
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  span?: 'col-span-1' | 'col-span-2' | 'row-span-2';
}

const BentoItem: React.FC<BentoItemProps> = ({ 
  children, 
  className = '', 
  span = 'col-span-1' 
}) => {
  return (
    <Card className={`border-none shadow-xl hover-lift hover-glow transition-all duration-500 ${span} ${className}`}>
      <CardContent className="p-0 h-full">
        {children}
      </CardContent>
    </Card>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr ${className}`}>
      {children}
    </div>
  );
};

export { BentoGrid, BentoItem };
