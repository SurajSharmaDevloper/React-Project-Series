import React from "react";
import Button from "../base/Button";
import headphone1 from "../../assets/LandingPageAssets/headDesktop.png";
import headphone2 from "../../assets/LandingPageAssets/headMobile.png";
import macDesktop from "../../assets/LandingPageAssets/macDesktop.png";
import macMobile from "../../assets/LandingPageAssets/macMobile.png";
import playDesktop from "../../assets/LandingPageAssets/playDesktops.png";
import playMobile from "../../assets/LandingPageAssets/playMobile.png";
import visionDesktop from "../../assets/LandingPageAssets/visionDesktop.png";
import visionMobile from "../../assets/LandingPageAssets/visionMobile.png";

const Banner_2 = () => {
  return (
    <main className="w-full flex flex-wrap max-[1060px]:flex-col ">
      <div className="w-[50%] max-[650px]:flex max-[650px]:flex-col h-[600px] max-[400px]:h-[528px] max-[650px]:h-auto  max-[1060px]:w-full">
        <div className="  flex   w-full h-[280px]">
          <div className="w-[50%] max-[650px]:w-full flex justify-between max-[650px]:flex-col max-[650px]:justify-center dark:text-neutral-300 bg-[#EDEDED] dark:bg-neutral-900 items-center max-[420px]:h-[250px]">
            <div className="max-[650px]:w-full max-[650px]:flex max-[650px]:justify-center max-[650px]:items-center">
              <img className="max-[650px]:hidden  " src={headphone1} alt="" />
              <img
                className="hidden h-[120px] max-[420px]:h-[80px] max-[650px]:block mt-5"
                src={headphone2}
                alt=""
              />
            </div>
            <div className="w-[65%] p-5 max-[650px]:w-full max-[650px]:text-center ">
              <h1 className="text-3xl max-[650px]:text-2xl max-[650px]:pb-3">
                Apple AirPods <span className="font-semibold"> Max</span>
              </h1>
              <p className="text-sm max-[400px]:hidden text-zinc-400">
                Computational audio. Listen, it's powerful.
              </p>
            </div>
          </div>

          <div className="w-[50%] max-[650px]:w-full bg-[#353535] max-[650px]:flex-col max-[650px]:justify-center flex justify-between items-center max-[420px]:h-[250px]">
            <div className="max-[650px]:w-full text-center max-[650px]:flex max-[650px]:justify-center max-[650px]:items-center">
              <img className="max-[650px]:hidden " src={visionDesktop} alt="" />
              <img
                className="hidden h-[120px]  max-[420px]:h-[80px]  max-[650px]:block"
                src={visionMobile}
                alt=""
              />
            </div>
            <div className="p-5 w-[65%] max-[650px]:w-full max-[650px]:text-center">
              <h1 className="text-3xl text-white font-light max-[650px]:text-2xl max-[650px]:pb-3">
                Apple Vision <span className="font-semibold">Pro</span>
              </h1>
              <p className="text-sm max-[400px]:hidden text-zinc-400">
                An immersive way to experience entertainment.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-300 flex max-[650px]:flex-col justify-center items-center  max-[650px]:h-[280px] h-[320px]">
          <div className="flex justify-center items-end h-[100%] max-[650px]:w-full">
            <img
              className="max-w-[280px] max-[650px]:hidden "
              src={playDesktop}
              alt=""
            />
            <img className="hidden h-[150px] max-[650px]:block" src={playMobile} alt="" />
          </div>
          <div className="flex pr-3 flex-col justify-center items-center text-center max-[650px]:p-5 max-[650px]:w-full">
            <h1 className="text-5xl max-[650px]:text-3xl ">Playstation 5</h1>
            <p className="text-sm max-[650px]:text-xs text-zinc-400 mt-5">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[50%] bg-[#EDEDED] dark:bg-neutral-900 dark:text-neutral-300 h-[600px] max-[650px]:h-auto flex justify-center items-center  max-[1060px]:w-full">
        <div className="flex max-[650px]:flex-col-reverse max-[650px]:justify-center justify-between items-center max-[650px]:text-center">
          <div className="p-5 w-[60%] max-[650px]:w-full max-[650px]:flex max-[650px]:flex-col max-[650px]:justify-center max-[650px]:items-center">
            <h1 className="text-7xl font-light max-[650px]:text-4xl ">
              Macbook <span className="font-semibold"> Air</span>
            </h1>
            <p className="text-sm text-zinc-400 mb-5 max-[650px]:xs ">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Button>
              Shop now
            </Button>
          </div>
          <div className=" w-[40%] flex items-center justify-end max-[650px]:w-full max-[650px]:justify-center">
            <img className="max-[650px]:hidden " src={macDesktop} alt="" />
            <img className="hidden max-[650px]:block" src={macMobile} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner_2;
