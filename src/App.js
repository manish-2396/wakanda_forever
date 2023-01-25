import "./App.css";
import { Route, Routes } from "react-router";
import InpulText from "./Componets/InpulText";
import Home from "./Componets/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<InpulText />} />
      </Routes>
    </div>
  );
}

export default App;
