import React, { createContext, useContext } from "react";
import type Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export const LenisProviderContext = LenisContext.Provider;

export function useLenisContext() {
  return useContext(LenisContext);
}

export default LenisContext;
