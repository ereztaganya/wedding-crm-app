import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  id?: string;
}

export function Cmp_ButtonPrimary({ 
  children, 
  onClick, 
  fullWidth = false,
  disabled = false,
  variant = 'primary',
  id
}: ButtonProps) {
  const baseStyles = "px-6 py-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#6B7532] text-white hover:bg-[#5A6229]",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#333333]",
    ghost: "bg-transparent text-[#1A1A1A] border border-[#E0E0E0] hover:border-[#1A1A1A]"
  };

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
      style={{ borderRadius: '4px' }}
    >
      {children}
    </button>
  );
}

export const Cmp_ButtonSecondary = Cmp_ButtonPrimary;