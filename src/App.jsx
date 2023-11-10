import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import Footer from './components/layout/footer/Footer';

function App() {


  return (
    <>
      
      <RouterProvider router={router}>
        
      </RouterProvider>
     <Footer />
    </>
  )
}

export default App
