import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  href?: string;
}

export default function Button({
  className = '',
  children,
  ...props
  
}: ButtonProps) {

 
  const hasRoundedClass = /rounded(-\w+)?/.test(className);

  return (
    <button
      type="button"
      className={[
        ' font-button font-jakarta',
        ' text-black',
        'outline-1 outline-gray-300 transition-colors hover:bg-yellow-400 ',
        '',
        hasRoundedClass ? '' : 'rounded-xl', // add default if none passed
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
