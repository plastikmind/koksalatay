import { useRef } from "react";
import Link from "next/link";

import { handleCollection } from "./Animations";

const collections_list = [
  // { name: "INFINITIY", image: "/infinity.jpg", link: "" },
  { name: "LABYRINTH", image: "/labyrinth.jpg", link: "/collection/labyrinth" },
  {
    name: "LET'S DANCE",
    image: "/letsdance.jpg",
    link: "/collection/let-s-dance",
  },
  { name: "SENSE", image: "/sense.jpg", link: "/collection/sense" },
  { name: "DADAŞ", image: "/girl.jpeg", link: "/collection/dadas" },
  { name: "PAST ONE", image: "/pastone.jpg", link: "/collection/past-one" },
];

const MenuItems = ({ showMenu, active }) => {
  let collectionBackground = useRef(null);
  return (
    <div
      ref={(el) => (collectionBackground = el)}
      className={
        active
          ? "flex flex-col fixed inset-0 justify-center items-center bg-[#d4d6e2]"
          : "hidden"
      }
    >
      <div className="">
        <ul className="flex flex-col justify-center text-5xl sm:text-8xl text-transparent font-bold bg-clip-text  bg-gradient-to-tl  from-gray-500  to-black items-center">
          <button
            className="text-2xl sm:text-3xl"
            onClick={showMenu}
            active="false"
          >
            X
          </button>

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li className="lg:hidden">
            <Link href="/collections">Collections</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/press">Press</Link>
          </li>
        </ul>
      </div>
      {/* <div className="text-2xl text-white mt-40 flex justify-between w-full px-16">
        <div>Collections</div>
        <div className="">INFINITIY</div>
        <div>LABYRINTH</div>
        <div>LET'S DANCE</div>
        <div>SENSE</div>
        <div>DADAŞ</div>
        <div>PAST ONE</div>
      </div> */}
      <div className="hidden lg:flex text-xl xl:text-2xl text-white mt-40 font-semibold justify-between w-full px-16 xl:px-40 2xl:px-64">
        COLLECTIONS
        {/* Returning the list of collections */}
        {collections_list.map((el) => (
          <span
            key={el.name}
            onMouseEnter={() =>
              handleCollection(el.image, collectionBackground)
            }
            // onMouseOut={() => handleCollectionReturn(collectionBackground)}
          >
            <Link href={el.link}>{el.name}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
