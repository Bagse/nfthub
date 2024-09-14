import { TwitterIcon } from "./icons/TwitterIcon";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { WalletIcon } from "./icons/WalletIcon";

export function Navbar() {
  return (
    <header className="flex justify-between items-center place-content-center px-3 lg:px-72 py-5">
      <h1 className="dark:text-white text-2xl font-semibold nfthub">NFTHub</h1>
      <nav className="font-bold space-x-7 dark:text-white">
        <a href="">Home</a>
        <a href="">Collection</a>
        <a href="">Choose</a>
        <a href="">Roadmap</a>
        <a href="">About</a>
        <a href="">Blog</a>
      </nav>
      <div className="flex gap-5 place-items-center">
        <a
          href="http://"
          className="lg:hover:scale-110 transition-all"
          alt="Twitter social media icon"
        >
          <TwitterIcon className="w-5 h-5 dark:text-white" />
        </a>
        <a
          href="http://"
          className="lg:hover:scale-110 transition-all"
          alt="Discord social media icon"
        >
          <DiscordIcon className="w-5 h-5 dark:text-white" />
        </a>
        <a
          href="http://"
          className="lg:hover:scale-110 transition-all"
          alt="Instagram social media icon"
        >
          <InstagramIcon className="w-5 h-5 dark:text-white" />
        </a>
        <a
          href="http://"
          className="lg:hover:scale-110 transition-all"
          alt="Wallet icon"
        >
          <WalletIcon className="w-5 h-5 dark:text-white" />
        </a>
      </div>
    </header>
  );
}
