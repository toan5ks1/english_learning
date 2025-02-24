import Image from "next/image";
import CharacterCard from "./character-card";

const NEW_ARRIVAL = [
  { name: "ASSASSIN", image: "/products/assassin.webp" },
  { name: "NEON GUY", image: "/products/neon-guy.webp" },
  { name: "MAFIA ENGLAND", image: "/products/mafia-england.webp" },
  {
    name: "BASKETBALL GIRL",
    image: "/products/bassketball-girl.webp",
  },
];

export function NewArrivalBanner() {
  return (
    <section className="relative flex flex-col items-start justify-between text-white">
      <Image
        src="/heroes/hero.webp"
        alt="Background Image"
        loading="lazy"
        width={2000}
        height={1125}
        className="absolute inset-0 object-cover"
      />
      {/* New Arrival */}
      <div className="z-10 flex items-center flex-1 py-20 px-28">
        <Image
          src="/heroes/new-arrival.svg"
          alt="Background Image"
          loading="lazy"
          width={600}
          height={600}
          className="h-full w-auto"
        />
      </div>

      {/* Character List with Image Background */}
      <div className="relative w-full space-x-6 h-[300px] flex items-end">
        <Image
          src="/heroes/character-list-bg.png"
          alt="Background Image"
          fill
          loading="lazy"
          className="object-cover object-center"
        />
        <div className="hidden sm:flex space-x-16 px-16 pb-4">
          {NEW_ARRIVAL.map((char, index) => (
            <CharacterCard key={char.name} url={char.image} title={char.name} />
          ))}
        </div>
        <div className="relative">
          <Image
            width={471}
            height={655}
            src="/heroes/the-dj.webp"
            alt="The DJ"
            loading="lazy"
            className="w-full h-auto object-cover object-center scale-x-[-1]"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-[40%]">
            <figure className="relative">
              <Image
                width={471}
                height={655}
                src="/heroes/the-dj-bg.svg"
                alt="The DJ"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <p className="absolute inset-0 m-auto w-fit h-fit text-5xl font-bold">
                THE DJ
              </p>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
