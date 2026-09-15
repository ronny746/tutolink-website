import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounceIn">
      <div className="glass-card bg-emerald-950/90 border border-emerald-500/50 p-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-white font-heading">Lead Submitted Successfully!</p>
          <p className="text-[11px] text-emerald-200 mt-0.5">{message}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
