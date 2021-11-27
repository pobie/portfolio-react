import { configureStore } from '@reduxjs/toolkit';
import CameraSlice from './cameraSlice';

export const gameStore = configureStore({
  reducer: {
    CameraTarget: CameraSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StoreRootState = ReturnType<typeof gameStore.getState>;
export type AppDispatch = typeof gameStore.dispatch;
