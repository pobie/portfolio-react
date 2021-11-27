import removeArrayElement from '../Utils/ArrayUtils';

export default class GamepadRegistration {
  private registeredGamepads: Gamepad[] = [];

  public startListening(): void {
    window.addEventListener('gamepadconnected', (e) => {
      this.onGamepadConnected(e);
    });
    window.addEventListener('gamepaddisconnected', (e) => {
      this.onGamepadDisconnected(e);
    });
  }

  public stopListening(): void {
    window.removeEventListener('gamepadconnected', (e) => {
      this.onGamepadConnected(e);
    });
    window.removeEventListener('gamepaddisconnected', (e) => {
      this.onGamepadDisconnected(e);
    });
  }

  private onGamepadDisconnected(e: GamepadEvent) {
    this.registeredGamepads = removeArrayElement(
      this.registeredGamepads,
      e.gamepad
    );
  }

  private onGamepadConnected(e: GamepadEvent): void {
    this.registeredGamepads.push(e.gamepad);
  }
}
