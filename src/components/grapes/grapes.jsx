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
  const tween = useRef();

  /*
    UTILITY METHODS
    tween.current = gsap.to(imgTwo.current, {
      y: 200,
      duration: 5,
      paused: true,
    });
    setTimeout(() => {
      tween.current.seek(2.5);
      tween.current.play();
    }, 2000);
    */

  const handleClick = () => {
    /*TIMELINES*/
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power4.out",
      },
      onStart: () => {
        console.log("start");
      },
      onComplete: () => {
        console.log("complete");
      },
    });
    allImages.current.classList.remove("invisible");
    title.current.classList.remove("invisible");
    txt.current.classList.remove("invisible");

    tl.from(imgOne.current, {
      autoAlpha: 0,
      y: -80,
    });
    tl.from(
      imgTwo.current,
      {
        autoAlpha: 0,
        y: -80,
      },
      "<"
    );
    tl.from(imgThree.current, {
      autoAlpha: 0,
      y: -80,
    });
    tl.from(title.current, {
      autoAlpha: 0,
      y: -50,
    });
    tl.from(txt.current, {
      autoAlpha: 0,
      y: -50,
    });
  };
  useEffect(() => {}, []);

  return (
    <div>
      <div className="bg-green-200 w-screen h-screen " ref={containerImages}>
        <div className="flex invisible pt-40 invisible" ref={allImages}>
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
        <h1
          className="text-center text-black leading-6 mt-12 text-base sm:text-lg lg:text-xl xl:text-2xl pt-0 pb-2.5 md:mt-50 invisible"
          ref={title}
        >
          Welcome to the sandbox.
        </h1>
        <p
          className="text-center text-black leading-6 mt-2.5 text-xs sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl pt-0 pb-2.5 invisible"
          ref={txt}
        >
          Let's play with Greensock.
        </p>
        <div className="flex justify-center mt-20">
          <button
            onClick={handleClick}
            className="rounded bg-blue-700 px-5 text-white"
            ref={btn}
          >
            Validate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Grapes;
