import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import { ScrollUpButton } from "./ScrollUpButton";
import { Wallets } from "./Wallets";
import { useState, useEffect } from "react";

export function Layout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);

    darkModeMediaQuery.addEventListener("change", handleChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <div>
      <div
        className={`banner ${
          isDarkMode
            ? "bg-[#0f051d]"
            : "bg-gradient-to-r from-[#FFF5EC] to-[#E8FAFF]"
        }`}
      >
        <Navbar />
        <Main />
      </div>
      <Wallets />
      <ScrollUpButton />
      <div className="lg:px-72 py-2 px-3">{children}</div>
      <Banner />
      <Footer />
    </div>
  );
}
