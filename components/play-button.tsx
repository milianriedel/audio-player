import { useDispatch, useSelector } from 'react-redux';
import { addTrack, pauseTrack, playTrack } from '@/slices/player-slice';
import { Track } from '@/types/track';
import { RootState } from '@/store';
import { PauseCircleIcon } from '@heroicons/react/24/outline';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

interface PlayPauseButtonProps extends Track {}

const PlayPauseButton = ({ id, src, progress, duration }: PlayPauseButtonProps) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const isPlaying = currentTrack && currentTrack.id === id && currentTrack.playing;

  const togglePlayPause = () => {
    if (isPlaying) {
      dispatch(pauseTrack());
    } else {
      dispatch(playTrack({ id, src, playing: true, progress, duration }));
      dispatch(addTrack({ id, src, progress, duration }))
    }
  };

  return (
    <button onClick={togglePlayPause} className="play-pause-btn">
      {isPlaying ? <PauseCircleIcon className='w-7 h-7' /> : <PlayCircleIcon className='w-7 h-7' />}
    </button>
  );
};

export default PlayPauseButton;
