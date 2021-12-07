import { Debug, Physics } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import Hub from './Hub';

function Game() {
  useFrame(() => {});
  return (
    <Physics>
      <Debug>
        <Hub />
      </Debug>
    </Physics>
  );
}

export default Game;
