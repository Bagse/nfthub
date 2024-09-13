import { Button } from "./Button";
import { ArrowUpRight } from "./icons/ArrowUpRight";

export function Banner() {
  return (
    <div>
      <img src="./images/bg2.png" className="w-full h-full" alt="" />
      <div className="flex place-content-center -top-[404px] relative z-20">
        <div className="space-y-4">
          <h2 className="text-7xl font-bold w-96 text-center dark:text-white">
            Let's start{" "}
            <span className="bg-gradient-to-r from-[#6500F7] to-[#FF00EA] bg-clip-text text-transparent">
              minting
            </span>
          </h2>
          <p className="text-[#7B7583] text-lg">
            Invest and manage all your NFTs at one place.
          </p>
          <div className="flex place-content-center py-2">
          <Button title="Get started" rIcon={<ArrowUpRight />} link="#get-started" />
          </div>
        </div>
      </div>
    </div>
  );
}
