import AppRouter from "./routes/index.js";
import Index from "./components/Index";
import "./App.css";

function App() {
  return (
    <AppRouter>
      <Index />
    </AppRouter>
  );
}

export default App;
