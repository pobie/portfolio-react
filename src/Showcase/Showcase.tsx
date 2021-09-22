import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import Box from '../Box';
import CameraController from '../CameraController';

function Showcase() {
  const ref = useRef<HTMLCanvasElement>(null);

  //   useEffect(() => {
  //     function handleWindowResize() {
  //       if (!ref.current) {
  //         return;
  //       }
  //       ref.current.height = window.innerHeight;
  //     }
  //     window.addEventListener('resize', handleWindowResize);
  //   });

  return (
    <Canvas ref={ref}>
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}

export default Showcase;
