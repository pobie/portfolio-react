import { PublicApi } from '@react-three/cannon';
import { Camera } from '@react-three/fiber';
import { Vector3 } from 'three';
import { player } from '../../Settings/game-settings.json';

export default class PlatformerControls {
  private get movement(): Vector3 {
    return new Vector3(
      this.xPositiveMovement - this.xNegativeMovement,
      0,
      this.yPositiveMovement - this.yNegativeMovement
    );
  }

  private xPositiveMovement = 0;

  private xNegativeMovement = 0;

  private yPositiveMovement = 0;

  private yNegativeMovement = 0;

  private movementKeys = {
    up: ['ArrowUp', 'w'],
    down: ['ArrowDown', 's'],
    left: ['ArrowLeft', 'a'],
    right: ['ArrowRight', 'd'],
  };

  constructor(
    private readonly api: PublicApi,
    private readonly camera: Camera
  ) {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  public update(): void {
    this.move();
  }

  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  private move(): void {
    this.camera.updateMatrixWorld();
    const directionFromCamera = this.movement
      .transformDirection(this.camera.matrixWorld)
      .normalize()
      .multiplyScalar(player.speed);

    this.api.velocity.set(directionFromCamera.x, 0, directionFromCamera.z);
  }

  private onKeyDown = (event: KeyboardEvent) => {
    if (this.movementKeys.up.includes(event.key)) {
      this.yNegativeMovement = 1;
    }
    if (this.movementKeys.down.includes(event.key)) {
      this.yPositiveMovement = 1;
    }
    if (this.movementKeys.left.includes(event.key)) {
      this.xNegativeMovement = 1;
    }
    if (this.movementKeys.right.includes(event.key)) {
      this.xPositiveMovement = 1;
    }
  };

  private onKeyUp = (event: KeyboardEvent) => {
    if (this.movementKeys.up.includes(event.key)) {
      this.yNegativeMovement = 0;
    }
    if (this.movementKeys.down.includes(event.key)) {
      this.yPositiveMovement = 0;
    }
    if (this.movementKeys.left.includes(event.key)) {
      this.xNegativeMovement = 0;
    }
    if (this.movementKeys.right.includes(event.key)) {
      this.xPositiveMovement = 0;
    }
  };
}
