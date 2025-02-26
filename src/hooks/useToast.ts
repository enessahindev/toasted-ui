import { useContext } from 'react';
import { ToastContext } from '../components/ToastContext';
import { ToastOptions } from '../types';

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const toast = {
    show: (message: string, options?: ToastOptions) => context.addToast(message, options),
    info: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      context.addToast(message, { ...options, type: 'info' }),
    success: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      context.addToast(message, { ...options, type: 'success' }),
    warning: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      context.addToast(message, { ...options, type: 'warning' }),
    error: (message: string, options?: Omit<ToastOptions, 'type'>) => 
      context.addToast(message, { ...options, type: 'error' }),
    remove: (id: string) => context.removeToast(id),
    clearAll: () => context.clearAllToasts(),
  };

  return toast;
};