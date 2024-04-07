import AudioPlayerComponent from '@/components/audio-player';
import { Track } from '@/types/track';
import React, { createContext, useContext, useReducer } from 'react';


interface PlayerState {
  volume: number;
  currentTrack: Track | null;
  tracks: Track[] | null;
}

const initialState: PlayerState = {
  volume: 50,
  currentTrack: null,
  tracks: null,
};

type Action =
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'PLAY_TRACK'; payload: Track }
  | { type: 'PAUSE_TRACK' }
  | { type: 'ADD_TRACK'; payload: Track };

  const playerReducer = (state: PlayerState, action: Action): PlayerState => {
    console.log('Action received:', action);
    switch (action.type) {
      case 'SET_VOLUME':
        return { ...state, volume: action.payload };
      case 'PLAY_TRACK':
        return { ...state, currentTrack: { ...action.payload, playing: true } };
      case 'PAUSE_TRACK':
        if (state.currentTrack) {
          const updatedState = { ...state, currentTrack: { ...state.currentTrack, playing: false } };
          console.log('Updated state after PAUSE_TRACK:', updatedState);
          return updatedState;
        }
        return state;
      case 'ADD_TRACK':
        const trackExists = state.tracks?.some(track => track.id === action.payload.id);
        if (!trackExists) {
          const updatedTracks = state.tracks ? [...state.tracks, action.payload] : [action.payload];
          const updatedState = { ...state, tracks: updatedTracks };
          console.log('Updated state after ADD_TRACK:', updatedState);
          return updatedState;
        }
        return state;
      default:
        return state;
    }
  };

const PlayerContext = createContext<{
  state: PlayerState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });


interface PlayerProviderProps {
  children: React.ReactNode;
}

export default function PlayerProvider({ children }: PlayerProviderProps) {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      <AudioPlayerComponent />
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
