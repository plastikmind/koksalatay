import React from "react";

import { client } from "../lib/client";
import Collection from "../components/Collection";
import Header from "../components/Header";

const collections = ({ collections }) => (
  <div className="">
    <Header />
    <div className="flex items-center justify-center h-80">
      <p className="text-4xl sm:text-6xl font-bold italic">COLLECTIONS</p>
    </div>
    <div className="grid lg:grid-cols-2 justify-center">
      {collections?.map((collection, i) => (
        <Collection key={i} collection={collection} />
      ))}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "collection"]';
  const collections = await client.fetch(query);

  return {
    props: { collections },
  };
};

export default collections;
