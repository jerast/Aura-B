import { AppRoutes } from '@/routes';
import { Navbar, Sidebar } from '@/interface';
import { useSelector } from 'react-redux';

export const App = () => {

   const { sidebarIsOpen } = useSelector( state => state.app );

   return (
      <>
         <Navbar />
         <main className="main">
            <AppRoutes />
         </main>
         <Sidebar />
      </>
   )
}