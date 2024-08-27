import { Button } from "./Button";
import { ArrowUpRight } from "./icons/ArrowUpRight";

export function Main() {
  return (
    <section className="px-72 py-20 flex justify-between gap-10 items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">
          High Quality NFT Collection
        </h1>
        <p className="text-[#7B7583] text-lg text-pretty">
          A 890 piece custom Nfthub's collection is joining the NFT space on
          Opensea.
        </p>
        <Button title="View in OPENSEA" rIcon={<ArrowUpRight />} />

        <div className="flex gap-2 items-center py-5">
          <img
            src="./images/e-users.png"
            className="w-24 h-12 object-cover"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold text-2xl">47k+</span>
            <span className="text-[#7B7583] text-sm">Community members</span>
          </div>
        </div>
      </div>
      <div>
        <img src="./images/hero.png" className="w-[800px] h-[450px] object-cover" alt="" />
      </div>
    </section>
  );
}
