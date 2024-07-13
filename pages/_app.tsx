import "../../serena/styles/globals.css";
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Appshell from "@/components/appshell/appshell";
export default function App({ Component, pageProps }: AppProps) {
  return (
      <MantineProvider>
          <Appshell>
              <Component {...pageProps} />
          </Appshell >
      </MantineProvider>

  );
}