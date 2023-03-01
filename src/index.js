import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { StyledEngineProvider } from '@mui/material';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/*
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate> */}
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename="/find-pets">
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
    {/* </PersistGate>
      </Provider>
    */}
  </>
);
