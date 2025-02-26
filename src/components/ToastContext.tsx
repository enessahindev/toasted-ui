import React, { createContext, useContext, useState, useCallback } from 'react';
import { ToastContextProps, ToastProps, ToastOptions } from '../types';

const defaultContext: ToastContextProps = {
  toasts: [],
  addToast: () => '',
  removeToast: () => {},
  clearAllToasts: () => {},
};

export const ToastContext = createContext<ToastContextProps>(defaultContext);

export const useToastContext = () => useContext(ToastContext);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((message: string, options?: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastProps = {
      id,
      message,
      type: options?.type || 'info',
      title: options?.title,
      duration: options?.duration || 5000,
      icon: options?.icon,
      onClose: options?.onClose,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);
    
    if ((toast.duration ?? 0) > 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration);
    }
    
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => {
      const toast = prevToasts.find((t) => t.id === id);
      if (toast?.onClose) {
        toast.onClose();
      }
      return prevToasts.filter((t) => t.id !== id);
    });
  }, []);

  const clearAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, clearAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
};