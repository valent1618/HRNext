import '../styles/main.scss';

import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

// Layouts
import Header from '../layouts/Header';
import Navigation from '../layouts/Navigation';
import Footer from '../layouts/Footer';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>HRNext</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='description' content='Manages employee of Wealth Health' />
      </Head>
      <Header />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
