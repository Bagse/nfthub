import { Footer } from "./Footer";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

export function Layout({children}) {
  return (
    <div>
        <div className="bg-[url('./images/background.jpg')] object-cover">
        <Navbar />
        <Main />
        </div>
        {children}
        <Footer />
    </div>
  )
}