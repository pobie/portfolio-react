import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

function Camera() {
  const ref = useRef<THREE.PerspectiveCamera>();
  const set = useThree((state) => state.set);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    set({ camera: ref.current });
  });

  useFrame(() => {
    if (!ref.current) {
      return;
    }
    ref.current.updateMatrixWorld();
  });
  return <perspectiveCamera ref={ref} position={[1, 2, 20]} />;
}

export default Camera;
