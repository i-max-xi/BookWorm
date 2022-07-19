import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Missions from "./components/Missions";
import Rockets from "./components/Rockets";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
