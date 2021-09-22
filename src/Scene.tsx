import { useRef } from 'react';

type SceneProps = {
  children: React.ReactNode;
};

function Scene(props: SceneProps) {
  const ref = useRef<THREE.Scene>();

  const { children } = props;

  return <scene ref={ref}>{children}</scene>;
}

export default Scene;
