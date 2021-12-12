import { ThreeEvent } from '@react-three/fiber';
import { useContext } from 'react';
import { RouterContext } from 'src/RouterContext';
import { Mesh, Vector3 } from 'three';

type LinkMeshProps = {
  mesh: Mesh;
  position: Vector3;
  scale: Vector3;
  path: string;
};

function MeshMenuItem({ mesh, position, scale, path }: LinkMeshProps) {
  const context = useContext(RouterContext);

  function onClick(event: ThreeEvent<MouseEvent>) {
    context?.push(path);
    event.stopPropagation();
  }
  function onPointerEnter() {}
  function onPointerLeave() {}

  return (
    <mesh
      onClick={onClick}
      onPointerEnter={() => onPointerEnter}
      onPointerLeave={onPointerLeave}
      geometry={mesh.geometry}
      material={mesh.material}
      position={position}
      scale={scale}
    >
      <meshStandardMaterial />
    </mesh>
  );
}

export default MeshMenuItem;
