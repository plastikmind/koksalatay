import { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import MenuItems from "./MenuItems";

const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const showMenu = () => {
    setActive(!active);
  };
  const [active, setActive] = useState(false);

  return (
    // <div className="flex py-10 z-10">
    //   <div>
    //     <Link href="/">
    //       <h1 className="font-medium tracking-widest text-xl fixed left-4">
    //         KÖKSAL ATAY
    //       </h1>
    //     </Link>
    //   </div>
    //   <nav className="mt-10 fixed">
    //     <div>
    //       <span className="animate-spin cursor-progress inline-flex  h-4 w-4 rounded-full left-20 absolute text-4xl ">
    //         *
    //       </span>
    //     </div>
    //     <MenuItems showMenu={showMenu} active={active} />
    //     <button
    //       className="right-8 text-white fixed text-3xl"
    //       onClick={() => setShowCart(true)}
    //     >
    //       <AiOutlineShopping />
    //       <span className="text-lg">{totalQuantities}</span>
    //     </button>
    //     {showCart && <Cart />}
    //   </nav>
    // </div>

    <div className="absolute py-10 z-10">
      <div>
        <Link href="/">
          <h1 className="font-medium tracking-widest text-xl fixed left-8">
            KÖKSAL ATAY
          </h1>
        </Link>
      </div>
      <button
        className="right-8  fixed text-3xl"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="text-lg">{totalQuantities}</span>
      </button>
      <nav className="mt-10 fixed">
        <div>
          <span
            onClick={showMenu}
            className="inline-flex  h-4 w-4 rounded-full left-8 absolute text-xl "
          >
            <AiOutlineMenu />
          </span>
        </div>
        {/* <button className='fixed mt-10 left-4'>*</button> */}
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
      {showCart && <Cart />}
    </div>
  );
};

export default Header;
