import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { CounterComponent } from '../src/features/counter/CounterComponent';
import { useCustomHook } from '../src/hooks/useCustomHook';
import { store } from '../src/store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useCustomHook();

  return (
    <Provider store={store}>
      <CounterComponent />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;