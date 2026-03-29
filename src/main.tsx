import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { LenisProvider } from "./lib/lenis-provider";
import { ThemeProvider } from "./lib/theme-provider";
import { inject } from "@vercel/analytics";

// Initialize Vercel Web Analytics
inject();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<LenisProvider>
				<App />
			</LenisProvider>
		</ThemeProvider>
	</StrictMode>
);
