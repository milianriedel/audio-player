import React from 'react';
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/outline';
import { usePlayer } from '@/components/providers/audio-player-provider'; // Adjust the import path as needed
import { Track } from '@/types/track';

type PlayPauseButtonProps = Omit<Track, 'playing'>

const PlayPauseButton = ({ id, src, progress, duration }: PlayPauseButtonProps) => {
  const { state, dispatch } = usePlayer();
  const isPlaying = state.currentTrack && state.currentTrack.id === id && state.currentTrack.playing;

  const togglePlayPause = () => {
    if (isPlaying) {
      dispatch({ type: 'PAUSE_TRACK' });
    } else {
      const newTrack = { id, src, playing: true, progress, duration };
      dispatch({ type: 'PLAY_TRACK', payload: newTrack });
      dispatch({ type: 'ADD_TRACK', payload: newTrack });
    }
  };

  return (
    <button onClick={togglePlayPause} className="play-pause-btn">
      {isPlaying ? <PauseCircleIcon className='w-7 h-7' /> : <PlayCircleIcon className='w-7 h-7' />}
    </button>
  );
};

export default PlayPauseButton;
