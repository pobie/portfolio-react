import { PerspectiveCamera } from '@react-three/drei';
import { Euler, Vector3 } from 'three';

interface CameraProps {
  position?: Vector3;
  rotation?: Euler;
}
function Camera({
  position = new Vector3(0, 0, 0),
  rotation = new Euler(0, 0, 0),
}: CameraProps) {
  return (
    <PerspectiveCamera
      makeDefault
      position={position}
      rotation={rotation}
      fov={30}
    />
  );
}

export default Camera;
