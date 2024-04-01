import PlayPauseButton from '@/components/play-button';
import { Inter } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return (
    <main
      className={inter.className}
    >
      <div className='grid grid-cols-2 gap-4'>
        <div className='border border-blue-200'>
          <Link className='' href="/detail-1">
            <Image src="https://source.unsplash.com/WLUHO9A_xik/812x610" width={812} height={610} alt='image' />
          </Link>
          <div className='flex gap-2 items-center p-2'>
            <PlayPauseButton
              src='/audio/ctvrty-druh.mp3'
              id="0"
              progress={0}
              duration={185}
            />
            <h2>Track 1</h2>
          </div>
        </div>
        <div className='border border-blue-200'>
          <Link className='' href="/detail-2">
            <Image src="https://source.unsplash.com/peaTniZsUQs/812x610" width={812} height={610} alt='image' />
          </Link>
          <div className='flex gap-2 items-center p-2'>
            <PlayPauseButton
              src='/audio/slobodny-svet.mp3'
              id="1"
              progress={100}
              duration={191}
            />
            <h2>Track 2</h2>
            <p> – Start point v čase 100 vteřin</p>
          </div>
        </div>
        <div className='border border-blue-200'>
          <Link className='' href="/detail-3">
            <Image src="https://source.unsplash.com/RgplfXbxLFs/812x610" width={812} height={610} alt='image' />
          </Link>
          <div className='flex gap-2 items-center p-2'>
            <PlayPauseButton
              src='/audio/band.mp3'
              id="2"
              progress={0}
              duration={30}
            />
            <h2>Track 3</h2>
          </div>
        </div>
        <div className='border border-blue-200'>
          <Link className='' href="/detail-4">
            <Image src="https://source.unsplash.com/Ete0zMKPWys/812x610" width={812} height={610} alt='image' />
          </Link>
          <div className='flex gap-2 items-center p-2'>
            <PlayPauseButton
              src='/audio/springevening.mp3'
              id="3"
              progress={20}
              duration={64}
            />
            <h2>Track 4</h2>
            <p> – Start point v čase 20 vteřin</p>
          </div>
        </div>
      </div>
    </main>
  );
}
