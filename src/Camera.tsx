import { PerspectiveCamera } from '@react-three/drei';

function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 15, -20]} fov={30} />;
}

export default Camera;
