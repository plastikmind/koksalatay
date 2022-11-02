import { useRef, useEffect } from "react";
import Link from "next/link";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProductScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".bir"),
  //     {
  //       opacity: 0,
  //       scale: 0.4,
  //       y: -20,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: element.querySelector(".elbise"),
  //         start: "top center",
  //         end: "center center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".bes"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".ay"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".bir"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".elbise"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".uc"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".beyaz-elbise"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".dort"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".kimono"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".yun"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".kazak"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".iki"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".pant"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".bes"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".ay"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".rain"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".raincoat"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".ehramceket"),
      {
        opacity: 0,
        scale: 0.4,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".ehram"),
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="yorgan">
        <div className="flex">
          <Link href={"/product/soft-denim-quilt-jacket-coat"}>
            <a>
              <img
                src="/yorgan-ceket.png"
                className="h-[333px] md:h-[666px] pl-20 lg:pl-32 xl:pl-60 2xl:pl-80 quiltjacket relative"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex justify-end ehram py-20">
        <Link href="/product/rare-ehram-fabric-reversible-jacket">
          <a>
            <img
              src="/ehram.png"
              className="h-[333px] md:h-[666px] pr-6 sm:pr-20 lg:pr-20 xl:pr-60 ehramceket relative"
            />
          </a>
        </Link>
      </div>

      <div className="raincoat">
        <div className="flex mt-20">
          <Link href={"/product/raincoat"}>
            <a>
              <img
                src="/raincoat.png"
                className="h-[333px] md:h-[666px] pl-20 lg:pl-32 xl:pl-60 2xl:pl-80 rain relative"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex justify-end kazak py-20">
        <Link href="/product/organic-wool-pullover">
          <a>
            <img
              src="/yun-kazak.png"
              className="h-[333px] md:h-[666px] pr-6 sm:pr-20 lg:pr-20 xl:pr-60 yun relative"
            />
          </a>
        </Link>
      </div>

      <div className="elbise pt-20">
        <div className="flex">
          <Link href={"/product/pomegrate-patterned-rare-suzani-long-dress"}>
            <a>
              <img
                src="/nar-dress.png"
                className="h-[333px] md:h-[666px] pl-20 lg:pl-32 xl:pl-60 2xl:pl-80 bir relative"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex justify-end pant py-20">
        <Link href="/product/sailor-pants">
          <a className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
            <img
              src="/sailor-pants.png"
              className="h-[333px] md:h-[666px] pr-6 sm:pr-20 lg:pr-20 xl:pr-60 iki relative grayscale"
            />{" "}
            SOLD OUT!
          </a>
        </Link>
      </div>

      <div className="flex beyaz-elbise py-20">
        <Link href="/product/deep-v">
          <a className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
            <img
              src="/deep-v.png"
              className="h-[333px] md:h-[666px] pl-4 sm:pl-12 lg:pl-24 xl:pl-60 2xl:pl-80 uc relative  grayscale"
            />{" "}
            SOLD OUT!
          </a>
        </Link>
      </div>
      <div className="flex kimono justify-end py-20">
        <Link href="/product/collar-kimono">
          <a className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
            <img
              src="/collar-kimono.png"
              className="h-[333px] md:h-[666px] pr-4 sm:pr-20 lg:pr-20 xl:pr-60 dort relative grayscale"
            />{" "}
            SOLD OUT!
          </a>
        </Link>
      </div>
      <div className="flex ay pt-20 mb-32">
        <Link href="/product/linen-shirt">
          <a className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
            <img
              src="/linen-shirt.png"
              className="h-[333px] md:h-[666px] pl-6 sm:pl-20 lg:pl-32 xl:pl-60 2xl:pl-80 bes relative grayscale"
            />{" "}
            SOLD OUT!
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductScroll;
