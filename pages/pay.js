import React, { useRef, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import Header from "../components/Header";
import { useRouter } from "next/router";

const Pay = () => {
  const router = useRouter();

  const payRef = useRef();
  const { totalPrice, cartItems } = useStateContext();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  let deneme = JSON.stringify(cartItems);

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("CONTINUE");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (lastname.length <= 0) {
      tempErrors["lastname"] = true;
      isValid = false;
    }
    if (address.length <= 0) {
      tempErrors["address"] = true;
      isValid = false;
    }
    if (postalcode.length <= 0) {
      tempErrors["postalcode"] = true;
      isValid = false;
    }
    if (city.length <= 0) {
      tempErrors["city"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          lastname: lastname,
          address: address,
          postalcode: postalcode,
          city: city,
          phone: phone,
          totalPrice: totalPrice,
          deneme: deneme,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setEmail("");
        setName("");
        setLastName("");
        setAddress("");
        setPostalCode("");
        setCity("");
        setPhone("");
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setEmail("");
      setName("");
      setLastName("");
      setAddress("");
      setPostalCode("");
      setCity("");
      setPhone("");

      router.push("/success");
    }
    // console.log(email, name, lastname, address, postalcode, city, phone, totalPrice);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2" ref={payRef}>
        <div className="flex  justify-center p-8">
          <div className="py-4 px-10 w-[480px]">
            <p className="pt-16">Contact & Shipping Information</p>

            {/* FORM */}
            <form
              action="/success"
              target="_blank"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* MAIL */}
              <div className="relative mt-4">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-[#fff0]"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email address
                </label>
                {errors?.email && (
                  <p className="text-red-500">Cannot be empty.</p>
                )}
              </div>

              {/* NAME */}
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="relative mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-[#fff0]"
                    placeholder="name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    First name
                  </label>
                  {errors?.name && (
                    <p className="text-red-500">Cannot be empty.</p>
                  )}
                </div>
                <div className="relative mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-[#fff0]"
                    placeholder="lastname"
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Last name
                  </label>
                  {errors?.lastname && (
                    <p className="text-red-500">Cannot be empty.</p>
                  )}
                </div>
              </div>

              {/* ADDRESS */}
              <div className="relative mt-6">
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-[#fff0]"
                  placeholder="address"
                />
                <label
                  htmlFor="address"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Address
                </label>
                {errors?.address && (
                  <p className="text-red-500">Cannot be empty.</p>
                )}
              </div>

              {/* postal code and city */}
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="relative mt-2">
                  <input
                    id="postalcode"
                    name="postalcode"
                    type="text"
                    value={postalcode}
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-[#fff0]"
                    placeholder="postalcode"
                  />
                  <label
                    htmlFor="postalcode"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Postal Code
                  </label>
                  {errors?.postalcode && (
                    <p className="text-red-500">Cannot be empty.</p>
                  )}
                </div>
                <div className="relative mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-[#fff0]"
                    placeholder="city"
                  />
                  <label
                    htmlFor="city"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    City
                  </label>
                  {errors?.city && (
                    <p className="text-red-500">Cannot be empty.</p>
                  )}
                </div>
              </div>
              {/* PHONE */}

              <div className="relative mt-6">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600 bg-[#fff0]"
                  placeholder="phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Phone
                </label>
                {errors?.phone && (
                  <p className="text-red-500">Cannot be empty.</p>
                )}
              </div>

              {/* BUTON */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white mt-4 bg-[#2A4232] hover:bg-[#18271e] font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                  {buttonText}
                </button>
              </div>

              {/* FORM MESSAGE */}
              <div className="text-left">
                {showSuccessMessage && (
                  <p className="text-green-500 font-semibold text-sm my-2">
                    Thankyou! Your Message has been delivered.
                  </p>
                )}
                {showFailureMessage && (
                  <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-screen bg-gray-200">
          <div className="flex flex-col w-full">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="flex p-5 justify-between" key={item._id}>
                  <div className="flex w-1/4 items-center justify-center">
                    <img
                      src={urlFor(item?.image[0])}
                      className="h-20 lg:h-28 xl:h-32 left-8"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center px-12">
                    <div className="flex text-xl font-bold ">
                      <h5>{item.name}</h5>
                      {/* <h4>{item.price}€</h4>
                    <h3>TOTAL:{totalPrice}€</h3> */}
                    </div>
                    <div className="flex text-lg font-semibold ">
                      <p>{item.quantity} x</p>
                    </div>
                    <div className="flex text-lg font-semibold ">
                      <p>{item.price}€</p>
                    </div>
                  </div>
                </div>
              ))}

            <div className=" text-xl font-bold flex mx-auto my-auto justify-between w-1/2">
              <div className="">
                <p>TOTAL</p>
              </div>
              <div>
                <p>{totalPrice}€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
