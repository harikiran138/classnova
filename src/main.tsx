import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { LenisProvider } from "./lib/lenis-provider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<LenisProvider>
			<App />
		</LenisProvider>
	</StrictMode>
);
