import { AppRoutes } from '@/routes';
import { Navbar, NotifyBar, ShoppingCart, Sidebar } from '@/interface';
import { useSelector } from 'react-redux';

export const App = () => {

   const { status } = useSelector( state => state.session );
   // const { sidebarIsOpen } = useSelector( state => state.app );

   return (
      <>
         { status !== 'auth' && <NotifyBar /> }
         <Navbar />
         <main className="main">
            <AppRoutes />
         </main>
         <Sidebar />
         <ShoppingCart />
      </>
   )
}