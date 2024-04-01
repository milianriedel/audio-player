import { Track } from '@/types/track';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentTrack extends Track {
  playing: boolean;
}

type PlayerState = {
  volume: number;
  currentTrack: CurrentTrack | null
  tracks: Track[] | null;
};

const initialState: PlayerState = {
  volume: 50,
  currentTrack: null,
  tracks: null,
};
export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    playTrack: (state, action: PayloadAction<CurrentTrack>) => {
      const { id } = action.payload;

      if (state.currentTrack && state.currentTrack.id === id) {
        state.currentTrack.playing = true;
      } else {
        state.currentTrack = { ...action.payload, playing: true };
      }
    },
    pauseTrack: (state) => {
      if (state.currentTrack) {
        state.currentTrack.playing = false;
      }
    },
    addTrack: (state, action: PayloadAction<Track>) => {
      const { id } = action.payload;
      const trackExists = state.tracks?.some(track => track.id === id);

      if (!trackExists) {
        state.tracks = state.tracks ? [...state.tracks, action.payload] : [action.payload];
      }
    },
  },
});

export const {
  addTrack,
  playTrack,
  pauseTrack,
  setVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
