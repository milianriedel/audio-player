import AudioPlayerComponent from '@/components/audio-player';

type Props = {
  children: React.ReactNode;
};

export const AudioPlayerProvider = ({ children }: Props) => {
  return (
    <div>
      <AudioPlayerComponent />
      {children}
    </div>
  );
};
