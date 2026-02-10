
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ALL_PROJECT_IMAGES } from './constants.tsx';
import { VaultState } from './types.ts';

const VaultContext = createContext<VaultState>({
  isReady: false,
  progress: 0,
  localMap: {},
});

export const useVault = () => useContext(VaultContext);

export const VaultProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<VaultState>({
    isReady: false,
    progress: 0,
    localMap: {},
  });

  useEffect(() => {
    const syncVault = async () => {
      // Lumine Strategic Asset Cache
      const cache = await caches.open('lumine-vault-v1');
      const map: Record<string, string> = {};
      let completed = 0;

      for (const url of ALL_PROJECT_IMAGES) {
        try {
          let response = await cache.match(url);
          
          if (!response) {
            const fetched = await fetch(url, { mode: 'cors' });
            if (fetched.ok) {
              await cache.put(url, fetched.clone());
              response = fetched;
            }
          }

          if (response) {
            const blob = await response.blob();
            const localUrl = URL.createObjectURL(blob);
            map[url] = localUrl;
          } else {
            map[url] = url;
          }
        } catch (error) {
          console.error(`Lumine Vault: Sync failed for ${url}:`, error);
          map[url] = url; 
        }
        
        completed++;
        setState(prev => ({
          ...prev,
          progress: Math.round((completed / ALL_PROJECT_IMAGES.length) * 100),
        }));
      }

      setState(prev => ({
        ...prev,
        isReady: true,
        localMap: map,
      }));
    };

    syncVault();
  }, []);

  return (
    <VaultContext.Provider value={state}>
      {children}
    </VaultContext.Provider>
  );
};
