import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string; // optional className agar override karna ho
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className }) => {
  return (
    <div className={`max-w-[1150px] px-5 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
