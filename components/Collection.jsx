import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Collection = ({ collection: { cover, name, slug } }) => {
  return (
    <div className="flex flex-col items-center  justify-center pb-10">
      <Link href={`/collection/${slug.current}`}>
        <div className="flex">
          <div className=" px-8 mb-20 mx-auto max-w-md xl:max-w-xl">
            <img src={urlFor(cover)} className="mt-20" />
            <p className="flex font-bold text-2xl">{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Collection;
