export function SectionContainer({ title, title2, children, pro }) {
  return (
    <div className="py-5">
      <h2 className={`flex gap-5 font-bold place-content-center lg:text-5xl dark:text-white ${pro}`}>
        {title}
        <span className="bg-gradient-to-r from-[#6500F7] to-[#FF00EA] bg-clip-text text-transparent">{title2}</span>
      </h2>
      <div>{children}</div>
    </div>
  );
}
