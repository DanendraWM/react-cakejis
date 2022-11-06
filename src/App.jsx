import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailMenuPage from "./pages/DetailMenuPage";
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detail/:id" element={<DetailMenuPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
