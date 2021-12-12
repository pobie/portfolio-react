function Plane() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <meshStandardMaterial color="#FF08FF" />
      <planeBufferGeometry args={[100, 100]} />
    </mesh>
  );
}

Plane.defaultProps = {
  rotation: [-Math.PI / 2, 0, 0],
};

export default Plane;
