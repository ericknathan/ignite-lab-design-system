import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeadingProps {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Heading({ asChild = false, size = 'md', children, className }: HeadingProps) {
  const Component = asChild ? Slot : 'h2';
  
  return (
    <Component className={clsx("text-gray-100 font-bold font-sans", {
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
    }, className)}>
      {children}
    </Component>
  )
}