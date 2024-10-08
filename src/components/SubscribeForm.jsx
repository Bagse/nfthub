export function SubscribeForm() {
  return (
    <>
      <div className="flex flex-col gap-3 place-content-center items-center border-2 rounded-3xl p-14 my-10">
        <h2 className="font-bold text-4xl lg:text-6xl dark:text-white text-center">
          Never{" "}
          <span className="bg-gradient-to-r from-[#6500F7] to-[#FF00EA] bg-clip-text text-transparent">
            miss a drop!
          </span>
        </h2>
        <p className="text-[#7B7583] text-center">
          Subscribe to our super-rare and exclusive drops & collectibles.
        </p>
        <form
          action=""
          className="flex flex-col lg:flex-row items-center gap-3 pt-4"
        >
          <input
            type="email"
            name="email"
            className="rounded-full py-3 px-4 bg-[#F2F2F2] dark:bg-[#3b3246] dark:text-white w-80 lg:w-96 outline-none border-white dark:border-[#0f051d]"
            placeholder="Enter your email"
          />
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#6500F7] to-[#FF00EA] rounded-full py-3 px-4 hover:scale-105 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex place-content-center py-20">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </>
  );
}
