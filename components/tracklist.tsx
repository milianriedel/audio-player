import React from 'react';
import { usePlayer } from '@/components/providers/audio-player-provider'; // Adjust the import path as needed

export default function TrackList() {
  const { state } = usePlayer();
  const { currentTrack, tracks, volume } = state;

  return (
    <div className='fixed right-1 top-1 bg-gray-900 text-white p-4 w-96'>
      <h2>Player State</h2>
      <div>
        <h3>Current Volume: {volume}</h3>
      </div>
      <div>
        <h3>Current Track</h3>
        {currentTrack ? (
          <ul>
            <li>ID: <strong>{currentTrack.id}</strong></li>
            <li>Source: <strong>{currentTrack.src}</strong></li>
            <li>Playing: <strong>{currentTrack.playing ? 'Yes' : 'No'}</strong></li>
            <li>Initial progress: <strong>{currentTrack.progress}</strong></li>
            <li>Duration: <strong>{currentTrack.duration}</strong></li>
          </ul>
        ) : (
          <p>No track currently playing.</p>
        )}
      </div>
      <div className='mt-2'>
        <h3 className='font-bold'>Tracks List</h3>
        {tracks && tracks.length > 0 ? (
          <ul>
            {tracks.map((track, index) => (
              <li key={index} className='mb-2'>
                Id: {track.id}, Source: {track.src}, Playing: {track.playing ? 'Yes' : 'No'}, Progress: {track.progress}, Duration: {track.duration}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tracks available.</p>
        )}
      </div>
    </div>
  );
};
