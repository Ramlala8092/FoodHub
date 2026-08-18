
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import ReactDom from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    <CartProvider>
        <App />
        <ToastContainer />
    </CartProvider>
)