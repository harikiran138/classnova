import React from "react";
import { useLenis } from "./use-lenis";

type LenisProviderProps = {
  children: React.ReactNode;
};

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  useLenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  return <>{children}</>;
};

export default LenisProvider;
