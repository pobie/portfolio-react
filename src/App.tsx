import { Suspense } from 'react';
import './App.css';
import Showcase from './Showcase/Showcase';

function App() {
  return (
    <div className="h-full w-full ">
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Showcase />
      </Suspense>
    </div>
  );
}

export default App;
