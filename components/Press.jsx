import React from "react";

import { urlFor } from "../lib/client";

const Press = ({ press: { cover, name, slug } }) => {
  return (
    <div className="flex flex-col items-center  justify-center pb-10">
      <div className="flex">
        <div className=" px-8 mb-20 mx-auto max-w-md xl:max-w-xl">
          <img src={urlFor(cover)} className="mt-20" />
          <p className="flex font-bold text-2xl">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Press;
