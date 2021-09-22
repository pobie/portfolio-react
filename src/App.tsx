import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Bio from './Bio/Bio';
import Home from './Home/Home';
import Showcase from './Showcase/Showcase';

function App() {
  return (
    <div className="bg-gray-100 h-full">
      <div className="h-full grid grid-cols-2 grid-rows-1">
        <div className="h-full">
          <Showcase />
        </div>
        <div className="font-title">
          <Router>
            <Switch>
              <Route path="/bio">
                <Bio />
              </Route>
              <Route path="/what">NONO</Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
