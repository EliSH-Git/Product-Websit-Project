import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import Footer from './components/layout/footer/Footer';
import CartProvider from './context/CartContext';

function App() {


  return (
    <CartProvider>
      <RouterProvider router={router}>
  
      </RouterProvider>
      <Footer />
    </CartProvider>
  )
}

export default App
