import { useLoader } from '@/hooks'
import { AppRoutes } from '@/routes'
import {
  Breadcrubs,
  Footer,
  Navbar,
  NotifyBar,
  ShoppingCart,
  Sidebar
} from '@/interface'

import './assets/styles/config.css'
import './assets/styles/main.css'
import './assets/styles/loading.css'

export const App = () => {
  const { pathname } = useLoader()

  const onLoginDisplay = (element) => {
    if (pathname !== 'login') return element
  }

  return (
    <>
      {
        onLoginDisplay(
          <header className="Header">
            <NotifyBar />
            <Navbar />
          </header>
        )
      }

      <main className={`Main ${(pathname !== '/') ? 'Main--content' : ''}`}>
        <Breadcrubs path={ pathname } />
        <AppRoutes />
      </main>

      {
        onLoginDisplay(
          <>
            <footer className="Footer">
              <Footer />
            </footer>
            <Sidebar />
            <ShoppingCart />
          </>
        )
      }
    </>
  )
}
