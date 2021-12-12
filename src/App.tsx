import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Bio from './Portfolio/Bio';
import Showcase from './Game/Showcase';
import { RouterProvider } from './RouterContext';
import Contact from './Portfolio/Contact';
import Projects from './Portfolio/Projects';

function App() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="h-full w-full">
      <RouterProvider history={history}>
        <ChakraProvider>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/bio">
                <Bio />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Showcase />
              </Route>
            </Switch>
          </AnimatePresence>
        </ChakraProvider>
      </RouterProvider>
    </div>
  );
}

export default App;
