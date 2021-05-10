import React from 'react';
import { Core } from '@k6ui/core';
import { DrawerProvider } from '@k6ui/modals';
import { ToastProvider } from '@k6ui/toast';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Core>
      <DrawerProvider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </DrawerProvider>
    </Core>
  );
}
