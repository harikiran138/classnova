import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { LenisProvider } from "./lib/lenis-provider";
import { ThemeProvider } from "./lib/theme-provider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<LenisProvider>
				<App />
			</LenisProvider>
		</ThemeProvider>
	</StrictMode>
);
