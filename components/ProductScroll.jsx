import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProductScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  // SALED PRODUCTS
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

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".bes"),
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
  //         trigger: element.querySelector(".ay"),
  //         start: "top center",
  //         end: "center center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

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

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".uc"),
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
  //         trigger: element.querySelector(".beyaz-elbise"),
  //         start: "top center",
  //         end: "center center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".dort"),
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
  //         trigger: element.querySelector(".kimono"),
  //         start: "top center",
  //         end: "center center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".iki"),
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
  //         trigger: element.querySelector(".pant"),
  //         start: "top center",
  //         end: "center center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".bes"),
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
  //         trigger: element.querySelector(".ay"),
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
      <div className="yorgan relative">
        <div className="flex">
          <Link href={"/product/soft-denim-quilt-jacket-coat"}>
            <a className="h-80 w-80 md:h-[666px] md:w-[666px] lg:pl-32 xl:pl-60 2xl:pl-80 quiltjacket relative">
              <Image
                src="/yorgan-ceket.png"
                alt="SOFT DENIM QUILT JACKET COAT"
                layout="fill"
                objectFit="fill"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex justify-end ehram py-16 relative mt-10">
        <Link href="/product/rare-ehram-fabric-reversible-jacket">
          <a className="h-80 w-80 md:h-[666px] md:w-[666px] pr-6 sm:pr-20 lg:pr-20 xl:pr-60 ehramceket relative">
            <Image
              src="/ehram.png"
              alt="RARE EHRAM FABRIC REVERSIBLE JACKET"
              layout="fill"
              objectFit="fill"
            />
          </a>
        </Link>
      </div>

      <div className="raincoat relative ">
        <div className="flex">
          <Link href={"/product/raincoat"}>
            <a className="h-80 w-80 md:h-[666px] md:w-[666px] lg:pl-32 xl:pl-60 2xl:pl-80 rain relative">
              <Image
                src="/raincoat.png"
                alt="RAINCOAT"
                layout="fill"
                objectFit="fill"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="flex justify-end kazak relative mb-32">
        <Link href="/product/organic-wool-pullover">
          <a className="h-80 w-80 md:h-[666px] md:w-[666px] pr-6 sm:pr-20 lg:pr-20 xl:pr-60 yun relative">
            <Image
              src="/yun-kazak.png"
              layout="fill"
              objectFit="fill"
              alt="ORGANIC WOOL PULLOVER"
            />
          </a>
        </Link>
      </div>

      {/* SOLD OUT PRODUCTS */}

      {/* <div className="elbise pt-20">
        <div className="flex">
          <Link href={"/product/pomegrate-patterned-rare-suzani-long-dress"}>
            <a className="h-[333px] md:h-[666px] pl-20 lg:pl-32 xl:pl-60 2xl:pl-80 bir relative">
              <Image
                src="/nar-dress.png"
                height={600}
                width={600}
                alt="POMEGRATE PATTERNED RARE SUZANI LONG DRESS"
              />
            </a>
          </Link>
        </div>
      </div>

      
      <div className="flex justify-end pant py-20">
        <Link href="/product/sailor-pants">
          <a className="h-[333px] md:h-[666px] pr-6 sm:pr-20 lg:pr-20 xl:pr-60 iki relative grayscale">
            <Image
              src="/sailor-pants.png"
              height={600}
              width={600}
              alt="sailor pants"
            />{" "}
            <span className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
              SOLD OUT!
            </span>
          </a>
        </Link>
      </div>

      <div className="flex beyaz-elbise py-20">
        <Link href="/product/deep-v">
          <a className="h-[333px] md:h-[666px] pl-4 sm:pl-12 lg:pl-24 xl:pl-60 2xl:pl-80 uc relative  grayscale">
            <Image src="/deep-v.png" height={600} width={600} alt="deep v" />{" "}
            <span className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
              SOLD OUT!
            </span>
          </a>
        </Link>
      </div>
      <div className="flex kimono justify-end py-20">
        <Link href="/product/collar-kimono">
          <a className="h-[333px] md:h-[666px] pr-4 sm:pr-20 lg:pr-20 xl:pr-60 dort relative grayscale">
            <Image
              src="/collar-kimono.png"
              height={600}
              width={600}
              alt="kimono"
            />{" "}
            <span className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
              SOLD OUT!
            </span>
          </a>
        </Link>
      </div>
      <div className="flex ay pt-20 mb-32">
        <Link href="/product/linen-shirt">
          <a className="h-[333px] md:h-[666px] pl-6 sm:pl-20 lg:pl-32 xl:pl-60 2xl:pl-80 bes relative grayscale">
            <Image
              src="/linen-shirt.png"
              height={600}
              width={600}
              alt="linen shirt"
            />{" "}
            <span className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
              SOLD OUT!
            </span>
          </a>
        </Link>
      </div>  */}
    </div>
  );
};

export default ProductScroll;
