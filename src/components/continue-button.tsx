"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Ensure you have a utility to merge class names
import { Button } from './ui/button';

const buttonVariants = cva(
  'flex flex-row justify-center items-center space-x-4 bg-customGrey py-1 pl-1 pr-5',
  {
    variants: {
      rounded: {
        true: 'rounded-lg',
        false: '',
      },
    },
    defaultVariants: {
      rounded: true,
    },
  }
);

interface ContinueButtonProps extends VariantProps<typeof buttonVariants> {
  number: string;
  route?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; // Add type prop
  className?: string;
}

const ContinueButton = React.forwardRef<HTMLDivElement, ContinueButtonProps>(
  ({ number, route, rounded, className, onClick, type = 'button', ...props }, ref) => {
    const router = useRouter();

    const handleClick = () => {
      if (onClick) {
        onClick(); // Call the custom onClick handler if provided
      }
      if (route) {
        router.push(route); // Navigate to the specified route if provided
      }
    };

    return (
      <div className={cn(buttonVariants({ rounded }), className)} ref={ref} {...props}>
        <Button onClick={handleClick} type={type}>
          Continue
        </Button>
        <span className="text-gray-700 tracking-wide font-neue-haas font-normal">
          Step {number} of 6
        </span>
      </div>
    );
  }
);

ContinueButton.displayName = 'ContinueButton';

export default ContinueButton;
