import React from 'react';
import App from './_app';
import { CartProvider } from '../contexts/CartContext';

export default function Home() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
};


