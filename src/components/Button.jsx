export function Button({ title, rIcon }) {
  return (
    <button className="bg-gradient-to-r from-[#2600FC] to-[#FF00EA] rounded-full py-3 px-4 text-white font-semibold text-base w-52 flex items-center gap-2 place-content-center hover:scale-105 transition-all duration-150">
      {title}
      {rIcon}
    </button>
  );
}
