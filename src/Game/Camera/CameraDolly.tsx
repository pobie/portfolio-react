type CameraDollyProps = {
  children: React.ReactNode;
};

function CameraDolly({ children }: CameraDollyProps) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry />
      </mesh>
      {children}
    </group>
  );
}

export default CameraDolly;
