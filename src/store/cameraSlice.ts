import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Object3D } from 'three';

interface CameraState {
  dolly?: Object3D;
  value?: Object3D;
}

const initialState: CameraState = {
  value: undefined,
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setTarget: (state: CameraState, action: PayloadAction<Object3D>) => {
      state.value = action.payload;
    },
    setDolly: (state: CameraState, action: PayloadAction<Object3D>) => {
      state.dolly = action.payload;
    },
  },
});

export const { setTarget, setDolly } = cameraSlice.actions;

export default cameraSlice;
