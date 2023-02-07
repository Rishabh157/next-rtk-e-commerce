import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import store from '../redux/store/store';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { ProductsApi } from '../redux/services/productsApi';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}> <ApiProvider api={ProductsApi}> <Component {...pageProps} /> </ApiProvider> </Provider>
}
