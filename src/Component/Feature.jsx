import React, { useState } from "react";
import Btn2 from "./Common/Btn2";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const Feature = () => {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);

  return (
    <>
      <div className="py-28 bg-white">
        <div className="container px-4 lg:px-0">
          <h3 className="text-[32px] sm:text-[52px] font-['Neue_Montreal'] font-normal pb-8">
            Featured projects
          </h3>
        </div>
        <div className="border-t border-[#0000007c] py-12">
          <div className="container px-4 lg:px-0">
            <div className="relative flex items-center justify-between flex-col lg:flex-row gap-y-20 lg:gap-y-0">
              <div>
                <div className="flex items-center gap-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    FYDE
                  </p>
                </div>
                <div
                  className={`group relative feature max-w-[629px] h-[300px] sm:h-[500px] rounded-2xl cursor-pointer hover:scale-95 ${
                    isHovering2 && "z-40"
                  }`}
                >
                  <div
                    onMouseEnter={() => setHovering2(true)}
                    onMouseLeave={() => setHovering2(false)}
                    className="w-full h-full bg-green-800 rounded-2xl overflow-hidden"
                  >
                    <img
                      className="h-full w-full bg-cover bg-center group-hover:scale-110"
                      src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute left-1/2 lg:left-full text-8xl sm:text-9xl z-50 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] overflow-hidden flex font-FamiljenGrotesk tracking-tight">
                    {"FYDE".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.02,
                        }}
                        className="inline-block"
                        key={index}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h2>
                </div>
                <div className="flex items-start gap-y-3 pt-4 flex-col sm:flex-row sm:gap-x-3 sm:items-center">
                  <div className="flex items-center gap-x-3">
                    <Btn2 BtnTitle={"audit"} />
                    <Btn2 BtnTitle={"copywriting"} />
                  </div>
                  <div className="flex items-center gap-x-3">
                    {" "}
                    <Btn2 BtnTitle={"sales deck"} />
                    <Btn2 BtnTitle={"slides design"} />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-x-2 items-center mb-4 sm:mt-10 md:mt-0">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    VISE
                  </p>
                </div>
                <div className="group relative feature max-w-[629px] h-[300px] sm:h-[500px] rounded-2xl cursor-pointer hover:scale-95">
                  <div
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className="w-full h-full bg-green-800 rounded-2xl overflow-hidden"
                  >
                    <img
                      className="h-full w-full bg-cover bg-center group-hover:scale-110"
                      src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute right-1/2 lg:right-full text-8xl sm:text-9xl z-[50] top-1/2 translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] overflow-hidden flex font-FamiljenGrotesk tracking-tight">
                    {"VISE".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.02,
                        }}
                        className="inline-block"
                        key={index}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h2>
                </div>
                <div className="flex items-center gap-x-3 pt-4">
                  <Btn2 BtnTitle={"agency"} />
                  <Btn2 BtnTitle={"company presentation"} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-14 lg:pt-28 flex-col gap-y-20 lg:flex-row lg:gap-y-0">
              <div>
                <div className="flex items-center gap-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    TRAWA
                  </p>
                </div>
                <div
                  onMouseEnter={() => setHovering3(true)}
                  onMouseLeave={() => setHovering3(false)}
                  className={`group feature relative max-w-[629px] h-[300px] sm:h-[500px] rounded-2xl cursor-pointer hover:scale-95 ${
                    isHovering3 && "z-30"
                  }`}
                >
                  <div className="w-full h-full bg-green-800 overflow-hidden rounded-2xl">
                    <img
                      className="bg-cover h-full w-full bg-center group-hover:scale-110"
                      src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute left-1/2 lg:left-full text-8xl sm:text-9xl z-20 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] font-FamiljenGrotesk tracking-tight flex overflow-hidden items-center">
                    {"TRAWA".split("").map((item, index) => (
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={isHovering3 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.02,
                        }}
                        key={index}
                        className="inline-block"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h2>
                </div>
                <div className="flex items-start gap-y-3 pt-4 flex-col sm:flex-row sm:gap-x-3">
                  <div className="flex items-center gap-x-3">
                    <Btn2 BtnTitle={"brand identity"} />
                    <Btn2 BtnTitle={"design research"} />
                  </div>

                  <Btn2 BtnTitle={"investor deck"} />
                </div>
              </div>

              <div>
                <div className="flex gap-x-2 items-center mb-4 sm:pt-14 md:pt-0">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                  <p className="text-base font-['Neue_Montreal'] font-normal">
                    PREMIUM BLEND
                  </p>
                </div>
                <div
                  onMouseEnter={() => setHovering4(true)}
                  onMouseLeave={() => setHovering4(false)}
                  className="group feature relative max-w-[629px] h-[300px] sm:h-[500px] rounded-2xl cursor-pointer hover:scale-95"
                >
                  <div className="w-full h-full bg-green-800 rounded-2xl overflow-hidden">
                    <img
                      className="h-full w-full bg-cover bg-center group-hover:scale-110"
                      src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                      alt=""
                    />
                  </div>
                  <h2 className="absolute right-1/2 lg:right-full text-[40px] sm:text-[70px] md:text-[70px] lg:text-9xl z-30 top-1/2 translate-x-[50%] -translate-y-[50%] font-semibold text-[#cdea68] font-FamiljenGrotesk tracking-tight flex overflow-hidden items-center">
                    {"PREMIUMBLEND".split("").map((item, index) => (
                      <motion.spna
                        initial={{ y: "100%" }}
                        animate={isHovering4 ? { y: "0" } : { y: "100%" }}
                        transition={{
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.02,
                        }}
                        key={index}
                        className="inline-block"
                      >
                        {item}
                      </motion.spna>
                    ))}
                  </h2>
                </div>
                <div className="flex items-center gap-x-3 pt-4">
                  <Btn2 BtnTitle={"branded template"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 lg:mt-24">
          <button className="group readMoreBtn flex items-center bg-black py-3 pl-5 pr-2 rounded-full hover:bg-[#1d1d1d]">
            <a
              href="#"
              className="text-base font-normal text-white font-['Neue_Montreal']"
            >
              VIEW ALL CASE STUDIES
            </a>
            <div className=" w-10 h-10 scale-[0.3] bg-white rounded-full flex items-center justify-center text-xl ml-7 group-hover:scale-[1] transition-all">
              <GoArrowUpRight className="hidden group-hover:block" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Feature;
