export function Wallets() {
  return (
    <div className="px-72 py-10">
      <div className="flex justify-center gap-9 items-center">
        <div className="flex items-center gap-1">
          <img
            src="https://img.icons8.com/color/48/metamask-logo.png"
            alt="Metamask logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-semibold tracking-widest">
            METAMASK
          </span>
        </div>

        <div className="flex items-center gap-1">
          <img src="./images/bitgo.png" alt="BitGo logo" className="w-5 h-6" />
          <span className="font-bold text-xl">BitGo.</span>
        </div>

        <img
          src="./images/coinbase.png"
          alt="Coinbase logo"
          className="w-28 h-5"
        />

        <div className="flex items-center gap-1">
          <img
            src="./images/trustwallet.png"
            className="w-6 h-6"
            alt="Trust Wallet logo"
          />
          <span className="text-base font-bold">Trust Wallet</span>
        </div>

        <div className="flex items-center gap-1">
          <img
            src="./images/exodus.png"
            alt="Exodus logo"
            className="w-6 h-6"
          />
          <span className="font-semibold text-xl tracking-widest">EXODUS</span>
        </div>
      </div>
      <div className="flex place-content-center py-20">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </div>
  );
}