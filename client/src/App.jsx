import { useLoader } from '@/hooks';
import { AppRoutes } from '@/routes';
import { Footer, Navbar, NotifyBar, ShoppingCart, Sidebar } from '@/interface';

export const App = () => {
   useLoader();

   return (
      <>
         <header className="Header">
            <NotifyBar />
            <Navbar />
         </header>
         <main className="Main">
            <AppRoutes />
         </main>
         <footer className="Footer">
            <Footer />
         </footer>
         <Sidebar />
         <ShoppingCart />
      </>
   )
}