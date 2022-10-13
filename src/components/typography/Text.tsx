import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextProps {
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export function Text({ asChild = false, size = 'md', children, className }: TextProps) {
  const Component = asChild ? Slot : 'span';
  
  return (
    <Component className={clsx("text-gray-100 font-sans", {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    }, className)}>
      {children}
    </Component>
  )
}