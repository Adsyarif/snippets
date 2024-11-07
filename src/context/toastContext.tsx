"use client";
import { createContext, useContext, ReactNode, useState } from "react";

interface ToastMessage {
  title: string;
  description: string;
}

interface ToastContextType {
  toastDetail?: ToastMessage | null;
  setToastDetail: (toast: ToastMessage | null) => void;
}

export const ToastContext = createContext<ToastContextType | any>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastDetail, setToastDetail] = useState<ToastMessage | null>(null);
  const value = {
    toastDetail,
    setToastDetail,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
