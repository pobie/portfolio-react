import { usePlane } from '@react-three/cannon';
import { useEffect } from 'react';
import { Mesh, MeshBasicMaterial } from 'three';

type PlaneProps = {
  rotation?: [x: number, y: number, z: number];
};

function Plane({ rotation }: PlaneProps) {
  const [ref] = usePlane(() => ({ rotation }));
  useEffect(() => {
    ((ref.current as Mesh).material as MeshBasicMaterial).color.setRGB(0, 0, 0);
  });
  return (
    <mesh ref={ref}>
      <planeBufferGeometry args={[100, 100]} />
    </mesh>
  );
}

Plane.defaultProps = {
  rotation: [-Math.PI / 2, 0, 0],
};

export default Plane;
