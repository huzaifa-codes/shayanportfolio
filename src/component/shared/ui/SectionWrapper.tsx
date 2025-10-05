import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[1200px] px-6     mx-auto">
      {children}
    </div>
  );
};

export default SectionWrapper;
