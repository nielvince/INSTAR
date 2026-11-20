import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import type { Pin } from "@/data/pins";

type SavedContextValue = {
  saved: Pin[];
  isSaved: (id: string) => boolean;
  toggleSave: (pin: Pin) => void;
};

const SavedContext = createContext<SavedContextValue | null>(null);

export function SavedPinsProvider({ children }: { children: ReactNode }) {
  const [map, setMap] = useState<Record<string, Pin>>({});

  const toggleSave = useCallback((pin: Pin) => {
    setMap((prev) => {
      const next = { ...prev };
      if (next[pin.id]) delete next[pin.id];
      else next[pin.id] = pin;
      return next;
    });
  }, []);

  const value = useMemo<SavedContextValue>(
    () => ({
      saved: Object.values(map),
      isSaved: (id) => !!map[id],
      toggleSave,
    }),
    [map, toggleSave]
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSavedPins() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSavedPins must be used inside SavedPinsProvider");
  return ctx;
}
