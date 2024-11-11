'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalDataContext = createContext();

export function GlobalDataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchHeaderFooterData() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_ROOT_URL}/wp-json/site-settings/v1/contact-info`
      );
      const result = await response.json();
      setData(result);
    }

    fetchHeaderFooterData();
  }, []);

  return (
    <GlobalDataContext.Provider value={data}>
      {children}
    </GlobalDataContext.Provider>
  );
}

export function useGlobalData() {
  return useContext(GlobalDataContext);
}
