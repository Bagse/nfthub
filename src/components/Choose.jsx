import { ChooseCard } from "./ChooseCard";

export function Choose() {
  return (
    <>
      <div className="flex gap-5 py-10">
        <ChooseCard
          icon="/icons/folder.svg"
          title="Huge Collection"
          info="A collection of 890
        unique Nerkos built to go
        beyond the digital space."
        />
        <ChooseCard
          icon="/icons/check.svg"
          title="High quality"
          info="The nerko's collection
        includes dozens of rare
        costumes ands colorways
        of artist's."
          pro="mt-8"
        />
        <ChooseCard
          icon="/icons/folder2.svg"
          title="Top resource"
          info="Tasty design resources
        made with care for each
        pixel. NFTs and game
        resources."
        />
        <ChooseCard
          icon="/icons/community.svg"
          title="Big community"
          info="Be part of a community of
        nerko owners and create
        user generated items."
          pro="mt-8"
        />
      </div>
      <div className="flex place-content-center py-20">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </>
  );
}
