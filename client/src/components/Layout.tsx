// components/Layout.tsx
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content - NO container wrapper here */}
      <main className="flex-1 pt-28">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}
