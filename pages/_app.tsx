import Layout from '@/components/layout';
import { AudioPlayerProvider } from '@/components/providers/audio-player-provider';
import ReduxProvider from '@/components/providers/redux-provider';
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <AudioPlayerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </AudioPlayerProvider>
      </ReduxProvider>
    );
}
