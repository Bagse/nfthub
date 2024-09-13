export function CardRoadmap({ phase, title, percent }) {
  return (
    <div className="flex flex-col gap-3 border-2 rounded-3xl p-4 w-72 hover:scale-105 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold bg-gradient-to-t from-[#6500F7] to-[#FF00EA] bg-clip-text text-transparent uppercase">
          {phase}
        </span>
        <img src={percent} alt="" className="w-12 h-12" />
      </div>
      <h3 className="font-bold text-3xl capitalize dark:text-white">{title}</h3>
      <p className="text-[#7B7583] text-pretty w-[260px]">
        Quality comes first. we took our time to plan out everything and build
        our production pipeline for a good quality artworks.
      </p>
      <div className="border-b-2 w-16 my-4"></div>
      <li className="flex flex-col gap-2 text-xs font-semibold pb-2 dark:text-white">
        <div className="flex items-center gap-2">
          <img src="./icons/check.svg" alt="check icon" className="w-4 h-4" />
          <span>Release website and logo</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="./icons/check.svg" alt="check icon" className="w-4 h-4" />
          <span>Grow community</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="./icons/check.svg" alt="check icon" className="w-4 h-4" />
          <span>Launch the project</span>
        </div>
      </li>
    </div>
  );
}
