import { CardRoadmap } from "./CardRoadmap";

export function Roadmap() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 place-items-center">
        <CardRoadmap
          phase="phase 01"
          percent="./icons/0.svg"
          title="planning"
        />
        <CardRoadmap
          phase="phase 02"
          percent="./icons/25.svg"
          title="production"
        />
        <CardRoadmap phase="phase 03" percent="./icons/50.svg" title="launch" />
        <CardRoadmap
          phase="phase 04"
          percent="./icons/75.svg"
          title="minting"
        />
        <CardRoadmap
          phase="phase 05"
          percent="./icons/95.svg"
          title="new nfts"
        />
        <CardRoadmap
          phase="phase 06"
          percent="./icons/100.svg"
          title="metaverse"
        />
      </div>
      <div className="flex place-content-center py-20">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </>
  );
}
