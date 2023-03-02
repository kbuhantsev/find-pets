import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { StyledEngineProvider } from '@mui/material';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter basename="/find-pets">
            <App />
          </BrowserRouter>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
