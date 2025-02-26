export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  title?: string;
  duration?: number;
  icon?: React.ReactNode;
  onClose?: () => void;
}

export interface ToastOptions {
  type?: ToastType;
  title?: string;
  duration?: number;
  icon?: React.ReactNode;
  onClose?: () => void;
}

export interface ToastContextProps {
  toasts: ToastProps[];
  addToast: (message: string, options?: ToastOptions) => string;
  removeToast: (id: string) => void;
  clearAllToasts: () => void;
}

export interface ToastContainerProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  limit?: number;
  newestOnTop?: boolean;
  className?: string;
  style?: React.CSSProperties;
}