import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import Camera from 'src/Camera';
import CameraController from 'src/CameraController';
import CameraDolly from 'src/Game/Camera/CameraDolly';
import { gameStore } from 'src/store/gameStore';
import { ClampToEdgeWrapping, TextureLoader } from 'three';
import Game from '../Game/Game';

function Showcase() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loader = new TextureLoader();
    const texture = loader.load('svgtest.svg');
    texture.wrapS = ClampToEdgeWrapping;
    texture.wrapT = ClampToEdgeWrapping;
  });

  return (
    <Canvas ref={ref}>
      <Provider store={gameStore}>
        <CameraDolly>
          <Camera />
        </CameraDolly>
        <CameraController />
        <ambientLight />
        <pointLight position={[0, 25, 0]} />
        <Game />
      </Provider>
    </Canvas>
  );
}

export default Showcase;
