import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Particles from 'react-particles-js';
import Home from './components/About/About';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route>
          <Particles
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} />
            <Navbar></Navbar>
          </Route>
          <Route to="home">
            <About></About>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
