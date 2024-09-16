import { ArrowUpward } from "./icons/ArrowUpward";

export function ScrollUpButton() {
  return (
    <button
      className="fixed bottom-4 right-4 p-2 bg-[#3b3246] rounded-full shadow-md hover:bg-[#343a40] focus:outline-none animate-bounce animate-infinite animate-ease-linear z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpward className="w-6 h-6 text-white" />
    </button>
  );
}
