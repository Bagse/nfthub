import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft } from "./icons/ChevronLeft";
import { ChevronRight } from "./icons/ChevronRight";
import { Button } from "./Button";
import { ArrowUpRight } from "./icons/ArrowUpRight";

// Componente para la flecha izquierda personalizada
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-1 top-52 transform -translate-y-1/2 p-2 bg-white z-20 rounded-full shadow-lg hover:scale-105 transition-all hover:bg-gray-200/90"
      style={{ zIndex: 10 }}
    >
      <ChevronLeft />
    </button>
  );
};

// Componente para la flecha derecha personalizada
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-1 top-52 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:scale-105 transition-all hover:bg-gray-200/90"
      style={{ zIndex: 10 }}
    >
      <ChevronRight />
    </button>
  );
};

export function Collection() {
  const NFTS = [
    {
      name: "#Metaverse",
      author: "By TheSalvare",
      image: "./images/art_01.webp",
    },
    {
      name: "#Polly Doll",
      author: "By TheNative",
      image: "./images/art_02.webp",
    },
    {
      name: "#Alec Art",
      author: "By GeorgZvic",
      image: "./images/art_03.webp",
    },
    {
      name: "#Toxic Poeth",
      author: "By YazoiLup",
      image: "./images/art_04.webp",
    },
    {
      name: "#Cyber Dreams",
      author: "By NeoArtist",
      image: "./images/art_05.webp",
    },
    {
      name: "#Mystic Realm",
      author: "By AuroraSky",
      image: "./images/art_06.webp",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 1, // Espacio entre elementos cuando se usan partialVisible
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 5, // Espacio entre elementos cuando se usan partialVisible
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 1, // Espacio entre elementos cuando se usan partialVisible
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        partialVisible={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        className="py-14"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {NFTS.map(({ name, author, image }) => (
          <div className="flex flex-col gap-2 items-center" key={name}>
            <img
              src={image}
              alt={`${name} NFT`}
              className="rounded-2xl w-[200px] h-[300px] object-cover"
            />
            <h2 className="font-bold text-center text-xl">{name}</h2>
            <p className="text-[#7B7583] text-sm text-center -mt-1">{author}</p>
          </div>
        ))}
      </Carousel>
      <div className="flex place-content-center py-10">
        <Button title="View collection" rIcon={<ArrowUpRight />} link="#view-collection" />
      </div>

      <div className="flex place-content-center py-14">
        <img src="./icons/vector-triangulo.svg" alt=" purple vector" />
      </div>
    </div>
  );
}
