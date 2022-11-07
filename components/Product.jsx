import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, saled } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        {saled ? (
          //  <div className='flex justify-center'>
          //   <p className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
          //  <img
          //      src={urlFor(image && image[0])}

          //      className="product-image h-80 md:h-[480px] 2xl:h-[640px] grayscale"
          //    />SOLD OUT!
          //    </p>

          //  </div>
          <div className="flex justify-center my-8 sm:items-center sm:my-20 flex-col">
            <img
              src={urlFor(image && image[0])}
              className="product-image h-auto"
            />
            <div className="flex justify-between px-2 font-light text-[10px] sm:text-sm ">
              <p className="px-4">SOLD</p>
            </div>
          </div>
        ) : (
          <div className="flex my-8 sm:my-20 flex-col">
            <img
              src={urlFor(image && image[0])}
              className="product-image h-auto"
            />
            <div className="flex justify-center sm:items-center flex-col text-[10px] sm:text-sm font-light px-4">
              <div className="uppercase">{name}</div>
              <div className="">{price} €</div>
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Product;
