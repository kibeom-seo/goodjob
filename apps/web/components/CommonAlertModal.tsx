'use client';

import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  XCircle, 
  Sparkles, 
  X 
} from 'lucide-react';

export type AlertType = 'success' | 'warning' | 'error' | 'info' | 'confirm';

export interface CommonAlertState {
  isOpen: boolean;
  type?: AlertType;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface CommonAlertModalProps {
  alertState: CommonAlertState;
  onClose: () => void;
}

export default function CommonAlertModal({ alertState, onClose }: CommonAlertModalProps) {
  if (!alertState.isOpen) return null;

  const {
    type = 'info',
    title,
    message,
    confirmText = '확인',
    cancelText = '취소',
    onConfirm,
    onCancel
  } = alertState;

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    onClose();
  };

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return (
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center ring-8 ring-emerald-50/50 mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        );
      case 'warning':
        return (
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center ring-8 ring-amber-50/50 mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
        );
      case 'error':
        return (
          <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center ring-8 ring-rose-50/50 mb-4">
            <XCircle className="w-6 h-6" />
          </div>
        );
      case 'confirm':
        return (
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center ring-8 ring-indigo-50/50 mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3182F6] flex items-center justify-center ring-8 ring-blue-50/50 mb-4">
            <Info className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleCancel}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center">
          {renderIcon()}

          <h3 className="text-lg font-black text-slate-900 tracking-tight">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line mt-2 max-w-xs sm:max-w-sm">
            {message}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2">
          {(type === 'confirm' || onCancel) && (
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {cancelText}
            </button>
          )}
          <button
            type="button"
            onClick={handleConfirm}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-extrabold text-white shadow-xs transition-all ${
              type === 'error'
                ? 'bg-rose-600 hover:bg-rose-700'
                : type === 'warning'
                ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                : 'bg-[#3182F6] hover:bg-blue-600'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
