import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChatDashboard from "./pages/ChatDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
