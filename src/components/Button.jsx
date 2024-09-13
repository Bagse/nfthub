export function Button({ title, rIcon, link }) {
  return (
    <a href={link} className="bg-gradient-to-r from-[#6500F7] to-[#FF00EA] rounded-full py-3 px-4 text-white font-semibold text-base w-52 flex items-center gap-2 place-content-center hover:scale-105 transition-all duration-150">
      {title}
      {rIcon}
    </a>
  );
}
