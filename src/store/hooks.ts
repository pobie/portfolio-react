import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { StoreRootState, AppDispatch } from './gameStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreRootState> = useSelector;
