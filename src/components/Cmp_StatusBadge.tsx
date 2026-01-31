import React from 'react';

interface Cmp_StatusBadgeProps {
  status: 'in-progress' | 'completed' | 'pending' | 'overdue';
  text: string;
}

export function Cmp_StatusBadge({ status, text }: Cmp_StatusBadgeProps) {
  const statusStyles = {
    'in-progress': 'bg-[#6B7532] text-white',
    'completed': 'bg-[#1A1A1A] text-white',
    'pending': 'bg-[#F5F5F5] text-[#666666]',
    'overdue': 'bg-[#333333] text-white'
  };

  return (
    <span 
      className={`inline-block px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
      style={{ borderRadius: '4px' }}
    >
      {text}
    </span>
  );
}
