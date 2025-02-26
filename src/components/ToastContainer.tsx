import React from 'react';
import { useToastContext } from './ToastContext';
import Toast from './Toast';
import { ToastContainerProps } from '../types';

const ToastContainer: React.FC<ToastContainerProps> = ({
  position = "",
  limit = 0,
  newestOnTop = true,
  className = "",
  style = {},
}) => {
  const { toasts, removeToast } = useToastContext();
  
  // Limit the number of toasts displayed
  const visibleToasts = toasts.slice(0, limit);
  
  // Order toasts based on newestOnTop preference
  const orderedToasts = newestOnTop ? [...visibleToasts].reverse() : visibleToasts;

  const getPositionStyles = (): React.CSSProperties => {
    switch (position) {
      case 'top-left':
        return { top: '1rem', left: '1rem' };
      case 'top-center':
        return { top: '1rem', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-right':
        return { bottom: '1rem', right: '1rem' };
      case 'bottom-left':
        return { bottom: '1rem', left: '1rem' };
      case 'bottom-center':
        return { bottom: '1rem', left: '50%', transform: 'translateX(-50%)' };
      case 'top-right':
      default:
        return { top: '1rem', right: '1rem' };
    }
  };

  const mergedStyles: React.CSSProperties = {
    position: 'fixed',
    zIndex: 9999,
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column', // Toastları düzgün hizalar
    padding: '12px 16px', // Doğru padding formatı
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    gap: '10px',
    overflowY: 'auto', // Eğer uzun toastlar varsa kaydırmayı etkinleştir
    maxWidth: '300px', // Çok büyük olmaması için sınır koy
    ...getPositionStyles(),
    ...style,
  };
  
  

  return (
    <div className={`${className}`} style={mergedStyles}>
      <div className="space-y-2">
        {orderedToasts.map((toast) => (
          <Toast key={toast.id} {...toast} onRemove={removeToast} />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;