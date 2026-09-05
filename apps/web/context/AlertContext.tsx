'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import CommonAlertModal, { AlertType, CommonAlertState } from '../components/CommonAlertModal';

export interface AlertOptions {
  type?: AlertType;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  showConfirm: (title: string, message: string, onConfirm: () => void, onCancel?: () => void) => void;
  showSuccess: (title: string, message: string) => void;
  showWarning: (title: string, message: string) => void;
  showError: (title: string, message: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alertState, setAlertState] = useState<CommonAlertState>({
    isOpen: false,
    title: '',
    message: ''
  });

  const showAlert = (options: AlertOptions) => {
    setAlertState({
      isOpen: true,
      type: options.type || 'info',
      title: options.title,
      message: options.message,
      confirmText: options.confirmText || '확인',
      cancelText: options.cancelText || '취소',
      onConfirm: options.onConfirm,
      onCancel: options.onCancel
    });
  };

  const showSuccess = (title: string, message: string) => {
    showAlert({ type: 'success', title, message });
  };

  const showWarning = (title: string, message: string) => {
    showAlert({ type: 'warning', title, message });
  };

  const showError = (title: string, message: string) => {
    showAlert({ type: 'error', title, message });
  };

  const showConfirm = (title: string, message: string, onConfirm: () => void, onCancel?: () => void) => {
    showAlert({
      type: 'confirm',
      title,
      message,
      confirmText: '확인',
      cancelText: '취소',
      onConfirm,
      onCancel
    });
  };

  const handleClose = () => {
    setAlertState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <AlertContext.Provider value={{ showAlert, showConfirm, showSuccess, showWarning, showError }}>
      {children}
      <CommonAlertModal alertState={alertState} onClose={handleClose} />
    </AlertContext.Provider>
  );
}

export function useAlert(): AlertContextType {
  const context = useContext(AlertContext);
  if (!context) {
    return {
      showAlert: ({ title, message }: AlertOptions) => {
        if (typeof window !== 'undefined') window.alert(`${title}\n\n${message}`);
      },
      showConfirm: (title: string, message: string, onConfirm: () => void) => {
        if (typeof window !== 'undefined' && window.confirm(`${title}\n\n${message}`)) {
          onConfirm();
        }
      },
      showSuccess: (title: string, message: string) => {
        if (typeof window !== 'undefined') window.alert(`${title}\n\n${message}`);
      },
      showWarning: (title: string, message: string) => {
        if (typeof window !== 'undefined') window.alert(`⚠️ ${title}\n\n${message}`);
      },
      showError: (title: string, message: string) => {
        if (typeof window !== 'undefined') window.alert(`❌ ${title}\n\n${message}`);
      }
    };
  }
  return context;
}
