import { useBreakpointValue } from '@chakra-ui/react';
import { Physics } from '@react-three/cannon';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { RouterContext } from 'src/RouterContext';
import Scene from 'src/Scene';
import { Vector3 } from 'three';
import Camera from './Camera';
import MainMenu from './MainMenu';
import Player from './Player';

function MainCanvas() {
  const ContextBridge = useContextBridge(RouterContext);
  const distance = useBreakpointValue({ base: -40, md: -25 });
  return (
    <Canvas>
      <ContextBridge>
        <Scene>
          <OrbitControls
            enableRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
          />
          <Camera position={new Vector3(0, 0, distance)} />
          <Suspense fallback={null}>
            <Physics>
              <MainMenu />
              <Player />
            </Physics>
          </Suspense>
          <ambientLight />
        </Scene>
      </ContextBridge>
    </Canvas>
  );
}

export default MainCanvas;
