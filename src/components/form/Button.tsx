import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: ReactNode;
}

export function Button({ asChild = false, children, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button';
  
  return (
    <Component
      className={clsx("py-3 px-4 bg-cyan-500 text-black rounded font-semibold text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white", className)}
      {...props}
    >
      {children}
    </Component>
  )
}