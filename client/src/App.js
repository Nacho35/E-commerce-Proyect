import { useState } from "react";
import AppRouter from "./routes/Main.js";
import Index from "./components/Index";
import "./App.css";
import { CartContextProvider } from "./components/CartContext.jsx";

function App() {
	const [cart, setCart] = useState([]);
	return (
		<CartContextProvider value={{ cart, setCart }}>
			<AppRouter>
				<Index />
			</AppRouter>
		</CartContextProvider>
	);
}

export default App;
