import Layout from '@/components/layout';
import PlayerProvider from '@/components/providers/audio-player-provider';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlayerProvider>
  );
}
