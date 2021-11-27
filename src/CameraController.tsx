import { useFrame, useThree } from '@react-three/fiber';
import { useSelector } from 'react-redux';
import { StoreRootState } from './store/gameStore';
import OrbitControls from './Game/Camera/OrbitControls';

const CameraController = () => {
  const { camera } = useThree();
  const controls: OrbitControls = new OrbitControls(camera);
  const { dolly } = useSelector((state: StoreRootState) => state.CameraTarget);

  useFrame(() => {
    if (!dolly) {
      return;
    }
    controls.setTarget(dolly);
    controls.update();
  });

  return null;
};

export default CameraController;
