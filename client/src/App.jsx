import { AppRoutes } from '@/routes';
import { Navbar, NotifyBar, ShoppingCart, Sidebar } from '@/interface';
import { useSelector } from 'react-redux';

export const App = () => {

   const { status } = useSelector( state => state.session );

   return (
      <>
         <header className="header">
            <NotifyBar />
            <Navbar />
         </header>
         <main className="main">
            <AppRoutes />
         </main>
         <footer className="footer">
            footer
         </footer>
         <Sidebar />
         <ShoppingCart />
      </>
   )
}