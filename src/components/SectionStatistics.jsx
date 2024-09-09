import { AnimatedNumbers } from "./AnimatedNumbers";

export function SectionStatistics() {
  return (
    <>
      <div className="flex gap-4 justify-between py-10 -mt-5">
        <AnimatedNumbers value="400000" sign="+" text="Wallets Connected" />
        <div className="border-r-2"></div>
        <AnimatedNumbers value="20000" sign="+" text="Wallets Connected" />
        <div className="border-r-2"></div>
        <AnimatedNumbers value="230" sign="+" text="Creative artists" />
        <div className="border-r-2"></div>
        <AnimatedNumbers value="2.5" sign="x" text="Estimated value" />
      </div>
      <div className="flex place-content-center py-20">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </>
  );
}
