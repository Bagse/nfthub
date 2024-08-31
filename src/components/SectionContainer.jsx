export function SectionContainer({ title, title2, children }) {
  return (
    <div className="py-5">
      <h2 className="flex gap-5 font-bold place-content-center text-5xl">
        {title}
        <span className="bg-gradient-to-r from-[#2600FC] to-[#FF00EA] bg-clip-text text-transparent">{title2}</span>
      </h2>
      <div>{children}</div>
    </div>
  );
}
