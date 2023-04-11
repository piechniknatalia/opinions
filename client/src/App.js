import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import GiveAnOpinion from './pages/GiveAnOpinion';
import Opinion from "./pages/Opinion";
function App() {
  return (
      <div className="App">
        <Router>
          <div className="navbar">
            <div id = "logo">
              <Link id="head" to="/">
                <img src={require("./pages/img/IKEA.png")} width="115"/>
              </Link>
            </div>
            <div>
              <Link class ="button" to="/giveanopinion"> Podziel się opinią </Link>
              <Link class ="button" to="/"> Opinie </Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/giveanopinion" element={<GiveAnOpinion/>} />
            <Route path="/opinion/:productName" element={<Opinion/>} />
          </Routes>
        </Router>
        <div className="footer">
        </div>
      </div>
  );
}

export default App;
