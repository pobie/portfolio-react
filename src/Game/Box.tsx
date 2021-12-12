import { useRef, useState } from 'react';
import { Vector3 } from '@react-three/fiber';

type BoxProps = {
  position: Vector3;
};

function Box({ position }: BoxProps) {
  const ref = useRef<THREE.Mesh>();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      position={position}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default Box;
