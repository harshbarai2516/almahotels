import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { WishlistProvider } from "./context/WishlistContext";
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </ThemeProvider>
  </StrictMode>,
)
