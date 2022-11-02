import React from "react";

import { client } from "../lib/client";
import Press from "../components/Press";
import Header from "../components/Header";

const shop = ({ presss }) => (
  <div className="">
    <Header />
    <div className="flex items-center justify-center h-80">
      <p className="text-6xl font-bold italic">PRESS</p>
    </div>
    <div className="grid lg:grid-cols-2 justify-center">
      {presss?.map((press) => (
        <Press key={press.id} press={press} />
      ))}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "press"]';
  const presss = await client.fetch(query);

  return {
    props: { presss },
  };
};

export default shop;
