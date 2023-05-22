import { useState } from "react";
import AppRouter from "./routes/Main.js";
import Index from "./components/Index";
import "./App.css";
import { CartContextProvider } from "./components/CartContext.jsx";

function App() {
	const [cart, setCart] = useState([]);
	return (
		<AppRouter>
			<CartContextProvider value={{ cart, setCart }}>
				<Index />
			</CartContextProvider>
		</AppRouter>
	);
}

export default App;
