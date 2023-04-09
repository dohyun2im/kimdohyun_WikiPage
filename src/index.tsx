import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './component/fallback';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <ConfigProvider theme={{ token: { colorPrimary: '#ff7a45' } }}>
                <ErrorBoundary FallbackComponent={Fallback}>
                    <App />
                </ErrorBoundary>
            </ConfigProvider>
        </BrowserRouter>
    </PersistGate>
  </Provider>,
);
