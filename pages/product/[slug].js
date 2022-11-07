import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Header from "../../components/Header";
import ProductFooter from "../../components/ProductFooter";

import { client, urlFor } from "../../lib/client";

import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const {
    image,
    name,
    details,
    price,
    size,
    shoulder,
    sleeve,
    length,
    color,
    fabric,
    saled,
  } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  return (
    <div>
      <Header />
      {/* f5f2cd */}
      <div className="relative">
        <div className="grid items-start grid-cols-1 md:grid-cols-3 ">
          <div className="grid grid-cols-1 md:col-span-2 bg-[#faf8f8] min-h-screen -z-10">
            {/* //left side */}

            {saled ? (
              <div className="flex flex-col items-center justify-center ">
                {image?.map((item, i) => (
                  <img
                    key={i}
                    src={urlFor(item)}
                    className="h-[444px] md:h-[555px] lg:h-[666px] lg:mt-40 grayscale"
                  />
                ))}

                {/* SLIDE */}
                <div className="w-full fixed">
                  <ProductFooter />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center ">
                {image?.map((item, i) => (
                  <img
                    key={i}
                    src={urlFor(item)}
                    className="h-[444px] md:h-[555px] lg:h-[666px] mt-20 lg:mt-40"
                  />
                ))}

                {/* SLIDE */}
                <div className="w-full fixed">
                  <ProductFooter />
                </div>
              </div>
            )}
          </div>

          <div className="sticky flex flex-col items-center justify-center top-0 px-5 bg-[#e0e2ee] min-h-screen pb-10 sm:pb-0">
            <div className="flex flex-col pt-10 sm:pt-0">
              <p className="text-4xl lg:text-5xl xl:text-6xl font-thin uppercase">
                {name}
              </p>
              <p className="my-4 font-light">{details}</p>
              {saled ? (
                <div className="flex justify-center items-center  flex-col">
                  <p className="text-4xl text-red-500 font-semibold -rotate-2 pt-10 font-Montserrat">
                    SOLD OUT!
                  </p>
                  <p className="text-xl sm:text-2xl xl:text-3xl font-semibold text-white mt-10">
                    <a
                      href="mailto:koksalatay@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#5f5843]"
                    >
                      ASK ABOUT
                    </a>
                  </p>
                </div>
              ) : (
                // FEATURES AND ADD TO CART
                <div className="flex flex-col w-full">
                  {/* FEATURES */}

                  <div className="flex justify-between w-full py-5">
                    <p className="text-center">
                      Size
                      <br />
                      <span className="italic font-semibold">{size}</span>
                    </p>
                    <p className="text-center">
                      Color <br />
                      <span className="italic font-semibold">{color}</span>
                    </p>
                    <p className="text-center">
                      Fabric <br />
                      <span className="italic font-semibold">{fabric}</span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full py-5">
                    <p className="text-center">
                      Shoulder
                      <br />
                      <span className="italic font-semibold">{shoulder}</span>
                    </p>
                    <p className="text-center">
                      Sleeve <br />
                      <span className="italic font-semibold">{sleeve}</span>
                    </p>
                    <p className="text-center">
                      Length <br />
                      <span className="italic font-semibold">{length}</span>
                    </p>
                  </div>

                  {/* ADD TO CART */}

                  <div className="flex border-2 border-white hover:border-black w-full">
                    <div className="w-1/3 flex items-center justify-center font-bold text-black">
                      <span
                        className="px-1 py-2 hover:text-white hover:scale-150"
                        onClick={decQty}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="px-2 py-2">{qty}</span>
                      <span
                        className="px-1 py-2 hover:text-white hover:scale-150"
                        onClick={incQty}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <div className="w-2/3 bg-black hover:bg-white text-white hover:text-black flex items-center justify-center">
                      <button
                        className="py-2 px-4   text-xl xl:text-[22px] font-bold"
                        onClick={() => onAdd(product, qty)}
                      >
                        ADD TO CART ({price}€)
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
