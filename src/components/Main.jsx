import { Button } from "./Button";
import { ArrowUpRight } from "./icons/ArrowUpRight";

export function Main() {
  return (
    <section className="px-3 lg:px-72 py-20 flex flex-col lg:flex-row justify-between gap-10 items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl text-center lg:text-left lg:text-5xl font-bold leading-tight dark:text-white">
          High Quality NFT Collection
        </h1>
        <p className="text-[#7B7583] text-lg text-pretty text-center lg:text-left">
          A 890 piece custom Nfthub's collection is joining the NFT space on
          Opensea.
        </p>
        <div className="flex place-content-center lg:place-content-start">
          <Button
            title="View in OPENSEA"
            rIcon={<ArrowUpRight />}
            link="#view-in-opensea"
          />
        </div>

        <div className="flex gap-2 place-content-center lg:place-content-start items-center py-5">
          <img
            src="./images/e-users.webp"
            className="w-24 h-12 object-cover"
            alt="3 user avatars in circles of colors"
          />
          <div className="flex flex-col">
            <span className="font-bold text-2xl dark:text-white">47k+</span>
            <span className="text-[#7B7583] text-sm">Community members</span>
          </div>
        </div>
      </div>
      <div>
        <img
          src="./images/hero.webp"
          className="w-full h-full lg:w-[800px] lg:h-[450px] object-cover"
          alt="Two squares with vivid colors separated"
        />
      </div>
    </section>
  );
}
