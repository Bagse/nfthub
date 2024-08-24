import { InstagramIcon } from "./icons/InstagramIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

export function Footer() {
  return (
    <footer className="px-72 py-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-96">
          <img
            src="./images/logo-morado.png"
            className="w-32 h-5"
            alt="Logo NFTHub"
          />
          <p className="text-pretty text-[#7B7583]">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
          <div className="flex gap-3">
            <a href="http://" className="lg:hover:scale-110 transition-all">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="http://" className="lg:hover:scale-110 transition-all">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="http://" className="lg:hover:scale-110 transition-all">
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h3 className="font-bold pb-3 text-lg">Quick Link</h3>
            <li className="flex flex-col gap-2 text-[#7B7583] font-medium">
              <a href="#about">About</a>
              <a href="#collection">Collection</a>
              <a href="#roadmap">Roadmap</a>
              <a href="#faqs">FAQs</a>
            </li>
          </div>
          <div>
            <h3 className="font-bold pb-3 text-lg">Community</h3>
            <li className="flex flex-col gap-2 text-[#7B7583] font-medium">
              <a href="#how-it-works">How it works!</a>
              <a href="#blockchain">Blockchain</a>
              <a href="#get-in-touch">Get in touch</a>
            </li>
          </div>
        </div>
      </div>
      <article className="text-[#7B7583] flex justify-between pt-14 text-sm items-center">
        <div className="flex flex-col gap-2">
          <span>
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/aashifasheikh12/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium bg-gradient-to-r from-[#2600FC] to-[#FF00EA] bg-clip-text text-transparent"
            >
              Aashifa
            </a>{" "}
            and developed by{" "}
            <a
              href="https://brian-gomez-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium bg-gradient-to-r from-[#2600FC] to-[#FF00EA] bg-clip-text text-transparent"
            >
              Bagse
            </a>
          </span>
          <span>Copyright © 2024 NFTHub. All rights reserved.</span>
        </div>

        <div className="flex gap-6">
          <a href="#privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms-of-use" className="hover:underline">
            Terms of Use
          </a>
        </div>
      </article>
    </footer>
  );
}
