import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({children}) {
  return (
    <div>
        <div className="bg-[url('./images/background.jpg')]">
        <Navbar />
        </div>
        {children}
        <Footer />
    </div>
  )
}