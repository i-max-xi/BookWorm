import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import './styles/App.css';

function App() {
  //  link navbar to <NavBar /> component
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
