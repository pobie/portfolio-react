import { Suspense } from 'react';
import './App.css';
import Showcase from './Showcase/Showcase';

function App() {
  return (
    <div className="h-full container mx-auto flex w-full justify-center">
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Showcase />
      </Suspense>
    </div>
  );
}

export default App;
