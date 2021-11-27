import { useDispatch } from 'react-redux';
import { setTarget } from 'src/store/cameraSlice';
import { Mesh, Vector3 } from 'three';

type LinkMeshProps = {
  mesh: Mesh;
  position: Vector3;
  scale: Vector3;
};

function LinkMesh({ mesh, position, scale }: LinkMeshProps) {
  const dispatch = useDispatch();
  function onClick() {
    dispatch(setTarget(mesh));
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
    />
  );
}

export default LinkMesh;
