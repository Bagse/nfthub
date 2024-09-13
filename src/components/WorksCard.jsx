import { ArrowUpRight } from "./icons/ArrowUpRight";

export function WorksCard({ imageLeft, imageRight, number, title, p1, p2 }) {
  return (
    <div className="flex justify-between gap-24 py-5 items-center">
      {imageLeft && (
        <img
          src={imageLeft}
          alt={`${title} image`}
          className="w-[400px] h-[400px]"
        />
      )}
      <div className="flex flex-col gap-4">
        <span className="bg-gradient-to-t from-[#2600FC] to-[#FF00EA] bg-clip-text text-transparent text-lg font-bold">
          {number}
        </span>
        <h3 className="text-4xl font-bold text-pretty w-80 dark:text-white">{title}</h3>
        <p className="text-[#7B7583] text-pretty w-[470px]">{p1}</p>
        <p className="text-[#7B7583] text-pretty w-[450px]">{p2}</p>
        <a
          href="#learn-more"
          className="flex items-center font-bold text-sm border-b-2 w-[110px] gap-1 hover:scale-105 transition-all dark:text-white"
        >
          Learn more <ArrowUpRight />
        </a>
      </div>
      {imageRight && (
        <img
          src={imageRight}
          alt={`${title} image`}
          className="w-[400px] h-[400px]"
        />
      )}
    </div>
  );
}
