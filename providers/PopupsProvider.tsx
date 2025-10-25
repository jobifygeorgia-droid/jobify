"use client";

import { createContext, useCallback, useContext, useState } from "react";

import { Alert, Dialog } from "@/components/ui";
import { generateRandomId } from "@/lib/utils";
import { AlertT, DialogT } from "@/interface/ui/ui";

type PopupsProviderT = {
  children: React.ReactNode;
};

type PopupsContextT = {
  addAlert: (alert: AlertT) => void;
  showDialog: (config: DialogT) => void;
  closeDialog: () => void;
  setDialogError: (loading: React.ReactNode) => void;
  setIsLoadingDialog: (loading: boolean) => void;
};

const PopupsContext = createContext<PopupsContextT>({
  addAlert: () => {},
  showDialog: () => {},
  closeDialog: () => {},
  setDialogError: () => {},
  setIsLoadingDialog: () => {},
});

const PopupsProvider: React.FC<PopupsProviderT> = ({ children }) => {
  // Alerts State
  const [alerts, setAlerts] = useState<Array<AlertT>>([]);

  const addAlert = useCallback(
    (alert: AlertT) =>
      setAlerts((prev) => [...prev, { ...alert, id: generateRandomId() }]),
    []
  );

  const onRemoveAlert = useCallback(
    (id: string) =>
      setAlerts((prev) => prev.filter((alert) => alert.id !== id)),
    []
  );

  // Dialog State
  const [dialogConfig, setDialogConfig] = useState<DialogT | null>(null);

  const showDialog = useCallback((config: DialogT) => {
    setDialogConfig(config);
  }, []);

  const closeDialog = useCallback(() => {
    setDialogConfig(null);
  }, []);

  const setDialogError = useCallback((content: React.ReactNode) => {
    setDialogConfig((prev) => {
      if (!prev) return null;
      return { ...prev, loading: false, content };
    });
  }, []);

  const setIsLoadingDialog = useCallback((loading: boolean) => {
    setDialogConfig((prev) => {
      if (!prev) return null;
      return { ...prev, loading };
    });
  }, []);

  return (
    <PopupsContext.Provider
      value={{
        addAlert,
        showDialog,
        closeDialog,
        setDialogError,
        setIsLoadingDialog,
      }}
    >
      {alerts.length > 0 && (
        <div className="fixed z-[9999] top-4 w-full flex flex-col gap-4 justify-center items-center">
          {alerts.map((alert) => (
            <Alert key={alert.id} {...alert} onRemove={onRemoveAlert} />
          ))}
        </div>
      )}

      {dialogConfig && (
        <Dialog
          {...dialogConfig}
          onClose={closeDialog}
          setIsLoadingDialog={setIsLoadingDialog}
        />
      )}

      {children}
    </PopupsContext.Provider>
  );
};

export default PopupsProvider;

export const usePopupsContext = () => {
  const context = useContext(PopupsContext);

  if (!context) throw new Error("Please use popups inside its Provider");

  return context;
};
