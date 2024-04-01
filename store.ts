import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './slices/player-slice';

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>;

// Optionally, if you need to type dispatch as well
export type AppDispatch = typeof store.dispatch;
