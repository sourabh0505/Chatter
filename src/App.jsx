import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChatDashboard from "./pages/ChatDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/chat-dashboard" element={<ChatDashboard/>}/>
        <Route path="/" element={<Login />}/>
        {/* <Route path="/signup" element={<Login />}/> */}
      </Routes>
    </div>
  );
}

export default App;
