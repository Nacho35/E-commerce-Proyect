import AppRouter from "./routes/Main.js";
import Index from "./components/Index";
import "./App.css";
import CartContextProvider from "./components/CartContext.jsx";

function App() {
	return (
		<AppRouter>
			<CartContextProvider>
				<Index />
			</CartContextProvider>
		</AppRouter>
	);
}

export default App;
