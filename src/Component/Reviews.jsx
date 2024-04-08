import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Reviews = () => {
  return (
    <>
      <div>
        <div className="container px-4 sm:px-0">
          <h2 className="font-['Neue_Montreal'] text-[32px] sm:text-[52px] font-normal pb-10">
            Clients’ reviews
          </h2>
        </div>
        <div className="border-t-2 border-[#00000081] common">
          <div className="container px-4 sm:px-0">
            <div className="hidden sm:block">
              <div className="flex items-center justify-between pt-4 ">
                <ul className="flex items-center">
                  <a
                    href="#"
                    className="Karman relative font-['Neue_Montreal'] text-base font-normal"
                  >
                    Karman Ventures
                  </a>
                  <p className="font-['Neue_Montreal'] text-base font-normal ml-[180px]">
                    Services:
                  </p>
                  <p className="font-['Neue_Montreal'] text-base font-normal ml-[258px]">
                    William Barnes
                  </p>
                </ul>

                <div>
                  <a
                    href=""
                    className="font-['Neue_Montreal'] text-base font-medium text-[#0000004b]"
                  >
                    READ
                  </a>
                </div>
              </div>
            </div>

            <div className="block sm:hidden ">
              <div className="flex items-start justify-between pt-4">
                <ul className="flex items-start flex-col sm:flex-row w-full">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <a
                        href="#"
                        className="Karman relative font-['Neue_Montreal'] text-base font-normal"
                      >
                        Karman Ventures
                      </a>
                    </div>
                    <div>
                      <a
                        href=""
                        className="font-['Neue_Montreal'] text-base font-medium text-[#0000004b]"
                      >
                        READ
                      </a>
                    </div>
                  </div>

                  {/* <p className="font-['Neue_Montreal'] text-base font-normal ml-[258px]">
                    William Barnes
                  </p> */}
                  <p className="font-['Neue_Montreal'] text-base font-normal sm:ml-[180px] ml-0">
                    Services:
                  </p>
                </ul>
              </div>
            </div>

            <div className="py-12 flex justify-center gap-x-32 flex-col sm:flex-row">
              <div className="flex flex-row gap-x-3 sm:gap-y-3 sm:flex-col">
                <div className="group flex items-center gap-x-2">
                  <button className="py-[6px] px-4 border-[3px] bg-[#0000] border-[#00000067] rounded-full text-black font-['Neue_Montreal'] hover:bg-[#000] hover:text-white transition-all cursor-pointer">
                    <a href="#">INVESTOR DECK</a>
                  </button>
                  <div className="right-icon relative w-9 h-9 border-2 border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-[1] overflow-hidden text-white">
                    <GoArrowUpRight className="text-[22px]" />
                    <div className="circle w-full h-full bg-black absolute top-0 left-0 -z-10 scale-0 group-hover:scale-125 rounded-full"></div>
                  </div>
                </div>
                <div className="group flex items-center gap-x-2">
                  <button className="py-[6px] px-4 border-[3px] bg-[#0000] border-[#00000067] rounded-full text-black font-['Neue_Montreal'] hover:bg-[#000] hover:text-white transition-all cursor-pointer">
                    <a href="#">SALES DECK</a>
                  </button>
                  <div className="right-icon relative w-9 h-9 border-2 border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-[1] overflow-hidden text-white">
                    <GoArrowUpRight className="text-[22px]" />
                    <div className="circle w-full h-full bg-black absolute top-0 left-0 -z-10 scale-0 group-hover:scale-125 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-7 w-[100px] h-[100px] overflow-hidden rounded">
                  <img
                    className="object-cover w-full h-full"
                    src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                    alt=""
                  />
                </div>
                <p className="font-['Neue_Montreal'] text-base font-normal max-w-[373px]">
                  They were transparent about the time and the stages of the
                  project. The end product is high quality, and I feel confident
                  about how they were handholding the client through the
                  process. I feel like I can introduce them to someone who needs
                  to put a sales deck together from scratch, and they would be
                  able to handhold the client experience from 0 to 100 very
                  effectively from story to design. 5/5
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24">
          <div className="border-t-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
          <div className="border-y-2 border-[#00000062] common">
            <div className="container">
              <ul className="flex items-center justify-between py-4">
                <a
                  href="#"
                  className="List-Planetly relative font-['Neue_Montreal'] text-base font-normal"
                >
                  Planetly
                </a>
                <p className="font-['Neue_Montreal'] text-base font-normal">
                  Nina Walloch
                </p>
                <a
                  href="#"
                  className="List-READ relative font-['Neue_Montreal'] text-base font-normal"
                >
                  READ
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
