import AppRouter from "./routes/Main.js";
import Index from "./components/Index";
import "./App.css";
import CartContextProvider from "./components/CartContext.jsx";

function App() {
	return (
		<CartContextProvider>
			<AppRouter>
				<Index />
			</AppRouter>
		</CartContextProvider>
	);
}

export default App;
