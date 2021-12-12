import { createContext, useEffect, useState } from 'react';
import { History } from 'history';

export const RouterContext = createContext({} as History | undefined);

type RouterContextProps = {
  history: History;
  children: React.ReactNode;
};

export function RouterProvider({ history, children }: RouterContextProps) {
  const [localHistory, setLocalHistory] = useState<History>();
  useEffect(() => {
    setLocalHistory(history);
  }, [history]);
  return (
    <RouterContext.Provider value={localHistory}>
      {children}
    </RouterContext.Provider>
  );
}
