import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pauseTrack, playTrack, setVolume } from '@/slices/player-slice';
import { RootState } from '@/store';
import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { PauseCircleIcon } from '@heroicons/react/24/outline';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { SpeakerXMarkIcon } from '@heroicons/react/24/outline';

export default function AudioPlayerComponent() {
  const dispatch = useDispatch();
  const volume = useSelector((state: RootState) => state.player.volume);
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const isPlaying = currentTrack?.playing || false;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      const decimalVolume = volume / 100;
      audioRef.current.volume = decimalVolume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio?.duration || 0);
    };

    const updateProgress = () => {
      const newProgress = audio ? (audio.currentTime / audio.duration) * 100 : 0;
      setProgress(isNaN(newProgress) ? 0 : newProgress);
    };

    if (audio) {
      audio.addEventListener('loadedmetadata', setAudioData);
      audio.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('loadedmetadata', setAudioData);
        audio.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentTrack) {
      audio.src = currentTrack.src;
      audio.load();

      const onLoadedMetadata = () => {
        audio.currentTime = currentTrack.progress;
        if (currentTrack.playing) {
          audio.play().catch((error) => console.error("Playback was prevented. Error:", error));
        }
      };

      audio.addEventListener('loadedmetadata', onLoadedMetadata);

      return () => {
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      };
    }
  }, [currentTrack]);

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(event.target.value);
    const newTime = (duration / 100) * newProgress;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setProgress(newProgress);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = currentTrack?.src || '';
      if (isPlaying) {
        const playPromise = audio.play();
        playPromise.catch(error => console.error("Playback was prevented. Error:", error));
      }
    }
  }, [currentTrack?.src, isPlaying]);

  const togglePlayPause = () => {
    if (currentTrack) {
      if (isPlaying) {
        dispatch(pauseTrack());
      } else {
        dispatch(playTrack(currentTrack));
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    dispatch(setVolume(newVolume));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="flex items-center justify-between gap-3 bg-gray-800 text-white p-4 max-w-xl mx-auto">
        <button onClick={togglePlayPause}>
          {isPlaying ? <PauseCircleIcon className='w-7 h-7' /> : <PlayCircleIcon className='w-7 h-7' />}
        </button>
        <input 
          type="range" 
          value={progress} 
          onChange={handleProgressChange} 
          min="0" 
          max="100" 
          className="w-full" 
        />
        <div className='flex gap-2'>
          <SpeakerXMarkIcon className='w-6 h-6' />
          <input 
            type="range" 
            value={volume}
            onChange={handleVolumeChange} 
            min="0" 
            max="100" 
          />
          <SpeakerWaveIcon className='w-6 h-6' />
        </div>
        <audio 
          ref={audioRef} 
          onEnded={() => dispatch(pauseTrack())}
          preload="metadata"
        />
      </div>
    </div>
  );
};
