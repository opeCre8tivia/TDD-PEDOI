import React from "react";

interface ErrorAlertProps {
  message: string;
  description?: string;
  onClose?: () => void;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, description, onClose }) => (
  <div className="w-full bg-red-50 border border-red-200 text-red-700 rounded-md p-4 flex items-start gap-3 relative">
    <svg className="w-5 h-5 mt-0.5 text-red-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z" />
    </svg>
    <div className="flex-1">
      <div className="font-semibold">{message}</div>
      {description && <div className="text-sm mt-1 text-red-600">{description}</div>}
    </div>
    {onClose && (
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-red-400 hover:text-red-600 focus:outline-none"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    )}
  </div>
);

export default ErrorAlert;