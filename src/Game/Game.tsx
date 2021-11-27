import { Debug, Physics } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import Player from './Player';
import Hub from './Hub';

function Game() {
  useFrame(() => {});
  return (
    <Physics>
      <Debug>
        <Player position={[0, 1, 0]} />
        <Hub />
      </Debug>
    </Physics>
  );
}

export default Game;
