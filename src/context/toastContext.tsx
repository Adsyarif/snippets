"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface ToastMessage {
  title: string;
  description: string;
}

interface ToastContextType {
  toast: ToastMessage | null;
  setToast: (toast: ToastMessage | null) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const value = {
    toast,
    setToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};
