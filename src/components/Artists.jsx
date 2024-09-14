import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export function Artists() {
  return (
    <>
      <div className="flex gap-3 py-10 justify-between flex-wrap lg:flex-nowrap px-5 lg:px-0">
        <div className="flex flex-col gap-3 items-center py-5 mt-0 lg:mt-8">
          <img
            src="./images/user1.png"
            alt=""
            className="w-36 h-36 p-2 border-2 rounded-3xl"
          />
          <h3 className="font-bold text-xl dark:text-white">Steps Jobs</h3>
          <span className="text-[#7B7583] text-sm">Artist</span>
          <div className="flex gap-2 py-2">
            <TwitterIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <DiscordIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <InstagramIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center py-5">
          <img
            src="./images/user2.png"
            alt=""
            className="w-36 h-36 p-2 border-2 rounded-3xl"
          />
          <h3 className="font-bold text-xl dark:text-white">Code Rometty</h3>
          <span className="text-[#7B7583] text-sm">Blockchain</span>
          <div className="flex gap-2 py-2">
            <TwitterIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <DiscordIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <InstagramIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center py-5 mt-0 lg:mt-8">
          <img
            src="./images/user3.png"
            alt=""
            className="w-36 h-36 p-2 border-2 rounded-3xl"
          />
          <h3 className="font-bold text-xl dark:text-white">Dash Gates</h3>
          <span className="text-[#7B7583] text-sm">Developer</span>
          <div className="flex gap-2 py-2">
            <TwitterIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <DiscordIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <InstagramIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center py-5">
          <img
            src="./images/user4.png"
            alt=""
            className="w-36 h-36 p-2 border-2 rounded-3xl"
          />
          <h3 className="font-bold text-xl dark:text-white">Byte Barra</h3>
          <span className="text-[#7B7583] text-sm">Marketing</span>
          <div className="flex gap-2 py-2">
            <TwitterIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <DiscordIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
            <InstagramIcon className="w-4 h-4 hover:scale-125 transition-all dark:text-white" />
          </div>
        </div>
      </div>
      <div className="flex place-content-center py-16">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </>
  );
}
