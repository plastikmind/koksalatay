import React from "react";

import { client } from "../lib/client";
import Product from "../components/Product";
import Header from "../components/Header";


const shop = ({products}) => (
 
    <div className="">
    <Header />
    <div className="flex items-center justify-center h-80">
      <p className="text-6xl font-bold italic">SHOP</p>
    </div>
    <div className="grid lg:grid-cols-2 justify-center">
     
     {products?.map((product, i) => (
        <Product key={i} product={product}/>
      ))}
    
    </div>
  </div>
 
);


export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    return {
      props: { products },
    };
  };


export default shop;