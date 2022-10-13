import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps {
  asChild?: boolean;
  children: ReactNode;
}

export function Button({ asChild = false, children }: ButtonProps) {
  const Component = asChild ? Slot : 'button';
  
  return (
    <Component className={clsx("py-4 px-3 bg-cyan-500 text-black rounded font-semibold text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white")}>
      {children}
    </Component>
  )
}