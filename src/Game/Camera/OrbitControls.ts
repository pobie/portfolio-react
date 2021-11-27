import { Camera } from '@react-three/fiber';
import { Object3D, Vector3 } from 'three';

export default class OrbitControls {
  private target: Object3D = new Object3D();

  constructor(private readonly camera: Camera) {
    this.camera.lookAt(this.getTargetWorldPosition());
  }

  public setTarget(target: Object3D) {
    this.target = target.clone();
  }

  public update() {
    this.camera.lookAt(this.getTargetWorldPosition());
  }

  private getTargetWorldPosition(): Vector3 {
    const worldPosition = new Vector3();
    this.target.clone().getWorldPosition(worldPosition);
    return worldPosition;
  }
}
