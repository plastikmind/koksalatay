import Marquee from "react-fast-marquee";

const Contact2 = () => (
  <Marquee
    gradient={false}
    className="text-2xl font-medium text-white fixed"
    speed={100}
  >
    KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫
    KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫
    KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫
    KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY ⚫ KÖKSAL ATAY
    ⚫&nbsp;
  </Marquee>
);

export const ProductFooter = () => {
  return (
    // <div className="flex">
    //     <div className=" items-center justify-center ">
    //         <Contact2 className="fixed" />
    //     </div>
    // </div>

    <div className="fixed bottom-0 bg-black items-center justify-center">
      <Contact2 className="" />
    </div>
  );
};

export default ProductFooter;
