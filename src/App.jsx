import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
