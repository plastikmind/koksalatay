import React from "react";
import Header from "../components/Header";
import { useStateContext } from "../context/StateContext";

import Link from "next/link";

const Success = () => {
  const { totalPrice } = useStateContext();
  return (
    <div className="">
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="font-Great-Vibes text-8xl">Thank you!</p>
        <p className="pt-8">
          We will email you an order confirmation and tracking info after your
          Manuel Payment.
        </p>
        <p>Please send {totalPrice} € to the accounts below</p>
        <p className="pt-10">GARANTİ BANKASI A.Ş.</p>
        <p className="py-1">
          IBAN Number TL : TR40 0006 2000 4390 0006 6678 17
        </p>
        <p className="py-1">
          IBAN Number USD : TR50 0006 2000 0200 0009 0914 34
        </p>
        <p className="py-1">
          IBAN Number EURO : TR24 0006 2000 1600 0009 0872 25
        </p>
        <p className="py-1">
          IBAN Number CHF : TR33 0006 2000 4390 0009 0595 75
        </p>
        <button
          type="button"
          class="text-[#2A4232] hover:text-white border border-[#2A4232]  hover:bg-[#2A4232] focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4"
        >
          <Link href="/">Return to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default Success;
