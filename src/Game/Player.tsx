import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import PlatformerControls from './Controls/PlatformerControls';

type CubeProps = {
  position?: [x: number, y: number, z: number];
};

function Player({ position }: CubeProps) {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
  }));
  const velocity = useRef([0, 0, 0]);
  const controls: PlatformerControls = new PlatformerControls(api, camera);

  useEffect(() => {
    api.sleepSpeedLimit.set(1.0);
    api.angularDamping.set(1);
    api.velocity.subscribe((v) => {
      velocity.current = v;
    });
    return () => {
      controls.dispose();
    };
  }, [ref]);

  useFrame(() => {
    controls.update();
  });
  return (
    <mesh>
      <sphereBufferGeometry />
    </mesh>
  );
}

Player.defaultProps = {
  position: [0, 0, 0],
};

export default Player;
