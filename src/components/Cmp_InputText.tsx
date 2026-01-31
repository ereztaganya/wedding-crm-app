import React from 'react';

interface Cmp_InputTextProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
}

export function Cmp_InputText({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  onKeyDown,
  label,
  id
}: Cmp_InputTextProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label id={id ? `${id}_label` : undefined} className="text-sm text-[#333333]">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full px-4 py-3 bg-white border border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#6B7532] transition-colors"
        style={{ borderRadius: '4px' }}
      />
    </div>
  );
}

export const Cmp_InputEmail = Cmp_InputText;
