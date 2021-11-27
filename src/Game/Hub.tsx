import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Box3, Vector3 } from 'three';
import { useCylinder } from '@react-three/cannon';
import LinkMesh from './LinkMesh';

type GLTFResult = GLTF & {
  nodes: {
    Base: THREE.Mesh;
    Bio: THREE.Mesh;
    Contact: THREE.Mesh;
    CV: THREE.Mesh;
    Projects: THREE.Mesh;
  };
  materials: {};
};

function Hub() {
  const group = useRef();
  const { nodes } = useGLTF('/portfolio_home.glb') as GLTFResult;
  nodes.Base.geometry.computeBoundingBox();

  const aabb = new Box3();
  aabb.setFromObject(nodes.Base);
  const size = aabb.getSize(new Vector3(0, 0, 0));
  const [ref] = useCylinder(() => ({
    mass: 1,
    type: 'Kinematic',
    args: [size.x / 2, size.x / 2, size.y],
  }));

  function onProjectsClick() {}
  return (
    <group ref={group} dispose={null}>
      <mesh
        ref={ref}
        onClick={onProjectsClick}
        geometry={nodes.Base.geometry}
        material={nodes.Base.material}
        position={[-0.13, -0.29, 0]}
        scale={[4.79, 0.02, 4.79]}
      >
        <LinkMesh
          mesh={nodes.Bio}
          position={new Vector3(-0.04, 50, 0.72)}
          scale={new Vector3(0.2, 50, 0.2)}
        />
        <LinkMesh
          mesh={nodes.Contact}
          position={new Vector3(0.76, 10, 0)}
          scale={new Vector3(0.2, 10, 0.2)}
        />
        <LinkMesh
          mesh={nodes.CV}
          position={new Vector3(-0.04, 50, -0.72)}
          scale={new Vector3(0.2, 50, 0.2)}
        />
        <LinkMesh
          mesh={nodes.Projects}
          position={new Vector3(-0.4, 50, 0)}
          scale={new Vector3(0.2, 50, 0.2)}
        />
      </mesh>
    </group>
  );
}

export default Hub;
