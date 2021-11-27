import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDolly } from 'src/store/cameraSlice';
import { StoreRootState } from 'src/store/gameStore';
import { Object3D, Vector3 } from 'three';
import CameraDollyControls from './CameraDollyControls';

type CameraDollyProps = {
  children: React.ReactNode;
};

function CameraDolly({ children }: CameraDollyProps) {
  const { gl } = useThree();
  const dollyRef = useRef<Object3D>();
  const value = useSelector(
    (state: StoreRootState) => state.CameraTarget.value
  );
  const dispatch = useDispatch();

  const [dollyControls, setDollyControls] = useState<CameraDollyControls>();

  useEffect(() => {
    if (!value) {
      return;
    }
    const target: Vector3 = new Vector3();
    value?.getWorldPosition(target);
    dollyControls?.setTarget(target);
  }, [value]);

  useFrame(() => {
    dollyControls?.updatePosition();
  });
  useEffect(() => {
    if (dollyRef.current === undefined) {
      return undefined;
    }
    setDollyControls(new CameraDollyControls(dollyRef.current, gl.domElement));
    dispatch(setDolly(dollyRef.current));
    return () => {
      dollyControls?.unregisterEvents(gl.domElement);
    };
  }, [dollyRef, gl]);

  return (
    <group ref={dollyRef}>
      <mesh>
        <sphereBufferGeometry />
      </mesh>
      {children}
    </group>
  );
}

export default CameraDolly;
