import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <div className="grid lg:grid-cols-2 overflow-x-hidden pt-20">
        <div className="px-8 mt-20">
          <p className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-12">
            <span className="hover:text-white">SAY HELLO</span>
          </p>
          <p className="text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-2">
            <span className="hover:text-[#5f5843]">+90 (535) 294 85 07</span>
          </p>
          <p className="text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-2">
            <a
              href="mailto:koksalatay@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5f5843]"
            >
              {" "}
              KOKSALATAY@GMAIL.COM
            </a>
          </p>
          <p className="text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl font-semibold mb-2">
            <a
              href="https://www.instagram.com/koksalatay/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#5f5843]"
            >
              INSTAGRAM
            </a>
          </p>
          <img
            className="mt-8 h-[480px] w-auto"
            src="/koksal-atay.jpg"
            alt="genco"
          />
          <p className="text-[#5f5843] font-medium lg:hidden my-10">
            Köksal Atay is a fashion designer based in Istanbul. Atay prefers to
            use oversize cuts in his designs, allowing for a sculpture-like
            effect, with his monochrome palette, the details are hidden in an
            artistic manner. His collection&apos;s takes its strength from its
            dynamic plainness and naïve statements as well as the hidden
            potentials. <br />
            <br />
            The most striking part of Atay&apos;s designs is that he leaves it
            for the client to decide how to use the details and the infinite
            potentials of his designs, not imposing any way of appearance, his
            garments are transformable and flexible to an extent where the
            collection never loses its uniqueness yet succeeds to be custom-made
            for everyone. Instead of using a wide color palette, atay prefers to
            focus on the fabric itself, using fabrics with patterns and only
            fabrics that are natural like cotton, leather and silk.
            <br />
            <br />
            Referring to his own history and culture, the collection somehow
            reminds us of the sufis with their capacity of motion and
            transformability. Atay chooses to take part in the whole process,
            the garments are created from scratch, picking up the fabrics,
            designing the collection and tailoring all garments, all aspects of
            the collection are of KÖKSAL ATAY&apos;s.
          </p>
        </div>
        <div className="hidden  lg:block my-32 px-20">
          <p className="text-gray-800 font-medium xl:text-xl 2xl:text-2xl">
            Köksal Atay is a fashion designer based in Istanbul. Atay prefers to
            use oversize cuts in his designs, allowing for a sculpture-like
            effect, with his monochrome palette, the details are hidden in an
            artistic manner. His collection&apos;s takes its strength from its
            dynamic plainness and naïve statements as well as the hidden
            potentials. <br />
            <br />
            The most striking part of Atay&apos;s designs is that he leaves it
            for the client to decide how to use the details and the infinite
            potentials of his designs, not imposing any way of appearance, his
            garments are transformable and flexible to an extent where the
            collection never loses its uniqueness yet succeeds to be custom-made
            for everyone. Instead of using a wide color palette, atay prefers to
            focus on the fabric itself, using fabrics with patterns and only
            fabrics that are natural like cotton, leather and silk.
            <br />
            <br />
            Referring to his own history and culture, the collection somehow
            reminds us of the sufis with their capacity of motion and
            transformability. Atay chooses to take part in the whole process,
            the garments are created from scratch, picking up the fabrics,
            designing the collection and tailoring all garments, all aspects of
            the collection are of KÖKSAL ATAY&apos;s.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 px-8 py-20">
        <div className="">
          <p className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-12">
            ATELIER
          </p>
          <div class="flex">
            <iframe
              className="h-[360px] sm:h-[480px] w-full xl:w-2/3"
              id=""
              src="https://maps.google.com/maps?q=Merdivenli%20mektep%20Sokak%20no%204/1%20Balat&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col px-0 pt-10 lg:pt-0 lg:px-10">
          <p className="text-5xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-12">
            OTHER SHOPS
          </p>

          <a
            href="https://www.instagram.com/maezae/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5f5843]"
          >
            <p className="font-bold">maezae karaköy istanbul</p>
          </a>

          <a
            href="https://www.instagram.com/macakizihotel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5f5843]"
          >
            <p className="font-bold">maça kızı hotel bodrum </p>
          </a>

          <a
            href="https://www.instagram.com/74escape/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5f5843]"
          >
            <p className="font-bold">&apos;74Escape</p>
          </a>
        </div>
      </div>

      <div className="flex">
        <Footer />
      </div>
    </div>
  );
}
