import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3 } from 'three';
import MeshMenuItem from './MeshMenuItem';

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

function MainMenu() {
  const { nodes } = useGLTF('/portfolio_home.glb') as GLTFResult;
  nodes.Base.geometry.computeBoundingBox();
  return (
    <mesh
      geometry={nodes.Base.geometry}
      material={nodes.Base.material}
      position={[-0.13, -0.29, 0]}
      scale={[4.79, 0.02, 4.79]}
    >
      <MeshMenuItem
        mesh={nodes.Bio}
        path="/bio"
        position={new Vector3(-0.04, 50, 0.72)}
        scale={new Vector3(0.2, 50, 0.2)}
      />
      <MeshMenuItem
        path="/contact"
        mesh={nodes.Contact}
        position={new Vector3(0.76, 10, 0)}
        scale={new Vector3(0.2, 10, 0.2)}
      />
      <MeshMenuItem
        mesh={nodes.CV}
        path="/resume"
        position={new Vector3(-0.04, 50, -0.72)}
        scale={new Vector3(0.2, 50, 0.2)}
      />
      <MeshMenuItem
        mesh={nodes.Projects}
        path="/projects"
        position={new Vector3(-0.4, 50, 0)}
        scale={new Vector3(0.2, 50, 0.2)}
      />
    </mesh>
  );
}

export default MainMenu;
