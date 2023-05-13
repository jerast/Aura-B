import { useLoader } from '@/hooks';
import { AppRoutes } from '@/routes';
import { Breadcrubs, Footer, Navbar, NotifyBar, ShoppingCart, Sidebar } from '@/interface';

export const App = () => {
   const { pathname } = useLoader();

   return (
      <>
         <header className="Header">
            <NotifyBar />
            <Navbar />
         </header>
         <main className={`Main${ (pathname !== '/') ? ' Main--content' : ''}`}>
            <Breadcrubs />
            <AppRoutes />
         </main>
         <footer className="Footer">
            <Footer />
         </footer>
         <Sidebar />
         <ShoppingCart />
      </>
   );
};