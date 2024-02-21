import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import './index.css';

/**
 * Renders the main application component wrapped in necessary providers and elements.
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Redux Provider for store */}
    <Provider store={store}>
      {/* Provider for NextUI theme */}
      <NextUIProvider>
        {/* Provider for NextUI dark mode */}
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {/* Main application component */}
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
