import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductScroll from "../components/ProductScroll";
import Hero from "../components/Hero";

export default function Alter() {
  return (
    <div className="">
      <Head>
        <title>Köksal Atay</title>
      </Head>
      <Header />

      <Hero />

      <ProductScroll />

      <Footer />
    </div>
  );
}
