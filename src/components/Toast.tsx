import React, { useEffect, useState } from "react";
import { ToastProps } from "../types";

const Toast: React.FC<ToastProps & { onRemove: (id: string) => void }> = ({
  id,
  message,
  type,
  title,
  duration,
  icon,
  onRemove,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!duration || duration <= 0 || isPaused) return;

    let startTime = Date.now();
    let remainingTime = duration;

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      remainingTime -= elapsedTime;
      startTime = Date.now();

      if (remainingTime <= 0) {
        clearInterval(timer);
        handleClose();
      } else {
        setProgress((remainingTime / duration) * 100);
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [duration, isPaused]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onRemove(id);
    }, 300); // Duration of exit animation
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-400 text-green-800";
      case "error":
        return "bg-red-50 border-red-400 text-red-800";
      case "warning":
        return "bg-yellow-50 border-yellow-400 text-yellow-800";
      case "info":
      default:
        return "bg-blue-50 border-blue-400 text-blue-800";
    }
  };

  const getProgressStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-400";
      case "error":
        return "bg-red-400";
      case "warning":
        return "bg-yellow-400";
      case "info":
      default:
        return "bg-blue-400";
    }
  };

  const getIconByType = () => {
    if (icon) return icon;

    switch (type) {
      case "success":
        return (
          <svg
            className="w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
        );
      case "error":
        return (
          <svg
            className="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            ></path>
          </svg>
        );
      case "warning":
        return (
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        );
      case "info":
      default:
        return (
          <svg
            className="w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
        );
    }
  };

  return (
    <div
      className={`w-auto min-w-[250px] max-w-sm shadow-lg rounded-lg pointer-events-auto border-l-4 ${getTypeStyles()} overflow-hidden transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: isVisible ? "translateX(0)" : "translateX(100%)",
        transition: "transform 300ms ease-in-out",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{getIconByType()}</div>
          <div className="ml-3 w-0 flex-1">
            {title && <p className="font-medium text-sm">{title}</p>}
            <p className={`text-sm ${title ? "mt-1" : ""}`}>{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="inline-flex text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md"
              onClick={handleClose}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {duration && duration > 0 && (
        <div
          className={`h-1 ${getProgressStyles()}`}
          style={{ width: `${progress}%`, transition: "width 10ms linear" }}
        />
      )}
    </div>
  );
};

export default Toast;
