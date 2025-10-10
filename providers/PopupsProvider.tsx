"use client";

import { createContext, useCallback, useContext, useState } from "react";

import { Alert } from "@/components/ui";
import { generateRandomId } from "@/lib/utils";

type PopupsProviderT = {
  children: React.ReactNode;
};

type PopupsContextT = {
  addAlert: (alert: AlertT) => void;
};

const PopupsContext = createContext<PopupsContextT>({
  addAlert: () => {},
});

const PopupsProvider: React.FC<PopupsProviderT> = ({ children }) => {
  const [alerts, setAlerts] = useState<Array<AlertT>>([]);

  const addAlert = (alert: AlertT) =>
    setAlerts((prev) => [...prev, { ...alert, id: generateRandomId() }]);

  const onRemoveAlert = useCallback(
    (id: string) =>
      setAlerts((prev) => prev.filter((alert) => alert.id !== id)),
    []
  );

  return (
    <PopupsContext.Provider value={{ addAlert }}>
      {alerts.length > 0 && (
        <div className="fixed z-[9999] top-4 w-full flex flex-col gap-4 justify-center items-center">
          {alerts.map((alert) => (
            <Alert key={alert.id} {...alert} onRemove={onRemoveAlert} />
          ))}
        </div>
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
