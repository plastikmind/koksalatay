import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineClose,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
    quantities,
  } = useStateContext();

  return (
    <div
      className="fixed right-0 top-0 bg-gray-200  h-full  w-full sm:w-2/3 md:w-1/2 2xl:w-1/3 overflow-y-auto"
      ref={cartRef}
    >
      <div className="">
        <div className="flex flex-col">
          <button
            type="button"
            className="mt-4 ml-2 text-2xl"
            onClick={() => setShowCart(false)}
          >
            <AiOutlineClose />
            <span className="font-light">CART</span>
            <br />
            <span className="text-xl font-light">
              ({totalQuantities} items)
            </span>
          </button>
        </div>

        <div className="flex items-center justify-center pt-20">
          {cartItems.length < 1 && (
            <div className="flex flex-col items-center justify-center pt-20">
              <AiOutlineShopping size={77} className="pb-5" />
              <h3 className="font-light">Your shopping bag is empty</h3>
              <Link href="/">
                <button
                  className="text-white mt-4 bg-black hover:bg-[#18271e] font-light rounded-lg text-sm px-5 py-2.5 mb-2"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="flex justify-center flex-col">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="flex p-5 w-full" key={item._id}>
                <div className="flex w-1/4 items-center justify-center">
                  <img
                    src={urlFor(item?.image[0])}
                    className="h-20 lg:h-28 xl:h-32 left-8"
                  />
                </div>
                <div className="flex flex-col w-full justify-between">
                  <div className="flex justify-between items-end text-xl font-bold">
                    <h5>{item.name}</h5>
                    <h4>{item.price}€</h4>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex pb-4">
                      <p className=" flex">
                        <span
                          className="p-1 "
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus className="text-red-600 text-xl" />
                        </span>
                        <span className="px-2 text-xl">{item.quantity}</span>
                        <span
                          className="p-1 text-green-600 text-xl"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-red-600 text-2xl"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="flex flex-col bottom-16 w-full mt-20  px-12">
            <div className="flex justify-between text-lg font-bold">
              <h3>Subtotal:</h3>
              <h3>{totalPrice}€</h3>
            </div>
            <div className="flex justify-center">
              <Link href="/pay">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="text-white mt-4 bg-[#2A4232] hover:bg-[#18271e] font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                  Pay
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
