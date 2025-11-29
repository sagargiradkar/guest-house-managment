// components/Layout.tsx
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Main content with responsive padding */}
      <main className="flex-1 pt-16 sm:pt-20 md:pt-24 lg:pt-28 w-full overflow-x-hidden">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}
