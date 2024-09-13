import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { Wallets } from "./Wallets";

export function Layout({ children }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FFF5EC] to-[#E8FAFF] banner">
        <Navbar />
        <Main />
      </div>
      <Wallets />
      <div className="px-72 py-2">{children}</div>
      <Banner />
      <Footer />
    </div>
  );
}
