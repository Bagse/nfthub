import { Footer } from "./Footer";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { Wallets } from "./Wallets";

export function Layout({ children }) {
  return (
    <div>
      <div className="bg-[url('./images/background.jpg')] object-cover banner">
        <Navbar />
        <Main />
      </div>
      <Wallets />
      {children}
      <Footer />
    </div>
  );
}
