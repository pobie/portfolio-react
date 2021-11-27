import { Object3D, Vector3 } from 'three';

enum OrbitControlsState {
  LOCKED,
  ROTATING,
}

export default class CameraDollyControls {
  private currentState: OrbitControlsState = OrbitControlsState.LOCKED;

  private target: Vector3 = new Vector3();

  constructor(private readonly dolly: Object3D, domElement: HTMLCanvasElement) {
    this.registerEvents(domElement);
    dolly.position.copy(this.target);
  }

  public setTarget(target: Vector3) {
    this.target = target;
  }

  public updatePosition(): void {
    const worldPosition: Vector3 = new Vector3();
    this.dolly.getWorldPosition(worldPosition);
    const delta = this.target.clone().sub(worldPosition).clone();
    const speed: number = 0.1;
    const translation = delta.multiplyScalar(speed).clone();

    this.dolly.position.copy(
      this.dolly.position.add(translation.clone()).clone()
    );
  }

  private registerEvents(domElement: HTMLCanvasElement) {
    domElement.addEventListener('pointerdown', () => this.onPointerDown());
    domElement.addEventListener('pointerup', () => this.onPointerUp());
    domElement.addEventListener('pointermove', (event) => {
      this.onPointerMove(event);
    });
  }

  public unregisterEvents(domElement: HTMLCanvasElement) {
    domElement.removeEventListener('pointerdown', () => this.onPointerDown());
    domElement.removeEventListener('pointerup', () => this.onPointerUp());
    domElement.removeEventListener('pointermove', (event) => {
      this.onPointerMove(event);
    });
  }

  private onPointerDown() {
    this.currentState = OrbitControlsState.ROTATING;
  }

  private onPointerUp() {
    this.currentState = OrbitControlsState.LOCKED;
  }

  private onPointerMove(event: PointerEvent) {
    if (this.currentState === OrbitControlsState.ROTATING) {
      this.rotate(-event.movementX * 0.01);
    }
  }

  private rotate(theta: number) {
    this.dolly.rotateY(theta);
  }
}
