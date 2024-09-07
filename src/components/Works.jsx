import { WorksCard } from "./WorksCard";

export function Works() {
  return (
    <>
      <div className="flex flex-col gap-7 py-10">
        <WorksCard
          imageLeft="./images/features-01.png"
          number="01."
          title="Setup and connect your wallet."
          p1="Use Trust Wallet, Metamask or any wallet to connect to multiple chains
        the app."
          p2="Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or
        any wallet ipsam temporibus."
        />
        <WorksCard
          imageRight="./images/features-02.png"
          number="02."
          title="Create your own
        digital artwork"
          p1="Quality comes first. we took our time to plan out everything
        and build our production pipeline for a good quality
        artwork's & digital artwork."
          p2="Starting the production on the procedurally generated
        planets and the smart contract for minting."
        />
        <WorksCard
          imageLeft="./images/features-03.png"
          number="03."
          title="Choose a
        platform to sell
        your NFT"
          p1="Earn ETH and BIT for all your NFTs that you sell on our
        marketplace."
          p2="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Recusandae doloremque a officiis quasi autem!"
        />
      </div>
      <div className="flex place-content-center py-14">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </>
  );
}
