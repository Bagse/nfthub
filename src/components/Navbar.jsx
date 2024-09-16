import { TwitterIcon } from "./icons/TwitterIcon";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { WalletIcon } from "./icons/WalletIcon";
import { useState } from "react";
import { CloseIcon } from "./icons/CloseIcon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex justify-between items-center place-content-center px-3 lg:px-72 py-5">
      <h1 className="dark:text-white text-3xl lg:text-2xl font-semibold nfthub">
        NFTHub
      </h1>
      <div className="lg:hidden z-50 relative">
        <button onClick={toggleMenu} className="border-none">
          {isOpen ? (
            <CloseIcon className="w-10 h-10 bg-white rounded-2xl" />
          ) : (
            <img src="./icons/menu.svg" className="w-8 h-8" />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen
            ? "fixed inset-0 bg-white dark:bg-black z-40 outline-none"
            : "hidden"
        } lg:flex justify-between lg:pl-16 items-center w-full`}
      >
        <nav className="font-bold lg:space-x-7 dark:text-white flex flex-col lg:flex-row pt-16 lg:pt-0 text-xl lg:text-base gap-3 lg:gap-0">
          <div className="border-b w-full my-2 lg:hidden"></div>
          <a
            href="#"
            className="pl-5 lg:pl-0 lg:hover:underline-offset-4 lg:hover:underline"
          >
            Home
          </a>
          <div className="border-b w-full my-2 lg:hidden"></div>
          <a
            href="#collection"
            className="pl-5 lg:pl-0 lg:hover:underline-offset-4 lg:hover:underline"
            onClick={closeMenu}
          >
            Collection
          </a>
          <div className="border-b w-full my-2 lg:hidden"></div>
          <a
            href="#choose"
            className="pl-5 lg:pl-0 lg:hover:underline-offset-4 lg:hover:underline"
            onClick={closeMenu}
          >
            Choose
          </a>
          <div className="border-b w-full my-2 lg:hidden"></div>
          <a
            href="#works"
            className="pl-5 lg:pl-0 lg:hover:underline-offset-4 lg:hover:underline"
            onClick={closeMenu}
          >
            Works
          </a>
          <div className="border-b w-full my-2 lg:hidden"></div>
          <a
            href="#roadmap"
            className="pl-5 lg:pl-0 lg:hover:underline-offset-4 lg:hover:underline"
            onClick={closeMenu}
          >
            Roadmap
          </a>
          <div className="border-b w-full my-2 lg:hidden"></div>
          <a
            href="#about"
            className="pl-5 lg:pl-0 lg:hover:underline-offset-4 lg:hover:underline"
            onClick={closeMenu}
          >
            About
          </a>
          <div className="border-b w-full my-2 lg:hidden"></div>
        </nav>
        <div className="flex gap-5 place-items-center pl-5 lg:pl-0 pt-5 lg:pt-0">
          <a
            href=""
            className="lg:hover:scale-110 transition-all border p-2 rounded-md lg:border-none lg:p-0"
            alt="Twitter social media icon"
          >
            <TwitterIcon className="w-6 lg:w-5 h-6 lg:h-5 dark:text-white" />
          </a>
          <a
            href=""
            className="lg:hover:scale-110 transition-all border p-2 rounded-md lg:border-none lg:p-0"
            alt="Discord social media icon"
          >
            <DiscordIcon className="w-6 lg:w-5 h-6 lg:h-5 dark:text-white" />
          </a>
          <a
            href=""
            className="lg:hover:scale-110 transition-all border p-2 rounded-md lg:border-none lg:p-0"
            alt="Instagram social media icon"
          >
            <InstagramIcon className="w-6 lg:w-5 h-6 lg:h-5 dark:text-white" />
          </a>
          <a
            href=""
            className="lg:hover:scale-110 transition-all border p-2 rounded-md lg:border-none lg:p-0"
            alt="Wallet icon"
          >
            <WalletIcon className="w-6 lg:w-5 h-6 lg:h-5 dark:text-white" />
          </a>
        </div>
      </div>
    </header>
  );
}
