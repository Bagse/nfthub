export function ChooseCard({ pro, icon, title, info }) {
  return (
    <div
      className={`flex flex-col gap-4 border rounded-xl py-5 px-4 w-60 h-72 place-content-center ${pro}`}
    >
      <img src={icon} alt="folder icon" className="w-10 h-10" />
      <h3 className="font-bold text-xl">
        <span className="block">{title.split(" ")[0]}</span>
        <span className="block">{title.split(" ")[1]}</span>
      </h3>
      <p className="text-[#7B7583] text-pretty">{info}</p>
    </div>
  );
}
