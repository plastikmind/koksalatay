import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-10 ß w-full">
      <div className="px-10 ">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <Link href="/" className="flex">
            <h1 className="font-medium tracking-widest text-xl">KÖKSAL ATAY</h1>
          </Link>

          <div className="flex flex-row justify-center mb-4 -ml-4 -mr-4">
            <a
              href="https://www.facebook.com/koksalatayofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-700 hover:text-gray-400"
            >
              <svg
                className="fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/koksalatay/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-700 hover:text-gray-400"
            >
              <svg
                className="fill-current"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle cx="12.145" cy="3.892" r="1"></circle>
                  <path d="M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
                  <path d="M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between text-center md:flex-row">
          <p className="order-last text-sm leading-tight text-gray-800 md:order-first">
            Built with 🖤 by{" "}
            <a
              href="https://plastikminds.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500"
            >
              plastik
            </a>
          </p>

          {/* TERMS & FAQ MENU */}
          {/* <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
            <li>
              {" "}
              <a href="#_" className="px-4 text-gray-500 hover:text-white">
                FAQ&apos;s
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#_" className="px-4 text-gray-500 hover:text-white">
                Terms
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
