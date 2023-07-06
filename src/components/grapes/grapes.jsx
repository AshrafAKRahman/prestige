import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Grapes = () => {
  const containerImages = useRef();
  const imgOne = useRef();
  const imgTwo = useRef();
  const imgThree = useRef();
  const title = useRef();
  const txt = useRef();
  const btn = useRef();
  const allImages = useRef();

  useEffect(() => {}, []);

  return (
    <div>
      <div className="bg-green-200 w-screen h-screen " ref={containerImages}>
        <div className="flex" ref={allImages}>
          <div className=" max-w-full max-h-full">
            <img
              src="./cat.svg"
              alt="Cat"
              className="max-w-full max-h-full object-contain"
              ref={imgOne}
            />
          </div>
          <div className=" max-w-full max-h-full">
            <img
              src="./fuji.svg"
              alt="Mountain"
              className="max-w-full max-h-full object-contain "
              ref={imgTwo}
            />
          </div>
          <div className=" max-w-full max-h-full">
            <img
              src="./ice-cream.svg"
              alt="Ice Cream"
              className="max-w-full max-h-full object-contain"
              ref={imgThree}
            />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button
            onClick={() => {
              gsap.from("img", {
                autoAlpha: 0,
                y: -100,
                ease: "power4",
                duration: 2,
                stagger: {
                  each: 0.5,
                  from: "center",
                },
              });
            }}
            className="rounded bg-blue-700 px-5 text-white"
            ref={btn}
          >
            Validate
          </button>
        </div>
      </div>

      <h1
        className="text-center text-black leading-6 mt-12 text-base sm:text-lg lg:text-xl xl:text-2xl pt-0 pb-2.5 md:mt-50"
        ref={title}
      >
        Welcome to the sandbox.
      </h1>
      <p
        className="text-center text-black leading-6 mt-2.5 text-xs sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl pt-0 pb-2.5"
        ref={txt}
      >
        Let's play with Greensock.
      </p>
      <div className="flex justify-center bg-blue-700"></div>
    </div>
  );
};

export default Grapes;
