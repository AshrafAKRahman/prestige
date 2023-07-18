import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HomeGsap = () => {
  const container_nav = useRef();
  const navImages = useRef();
  const logo_barrel = useRef();
  const logo_leaf = useRef();
  const home = useRef();
  const overlay = useRef();
  const home_content = useRef();
  const header = useRef();
  const middle_line = useRef();
  const grapesLogo = useRef();
  const btn = useRef();

  useEffect(() => {
    const revealAnim = () => {
      const TLFADE = gsap.timeline();

      TLFADE.from(header.current, { autoAlpha: 0, y: -50, delay: 0.2 })
        .to(middle_line.current, { height: 200 }, "-=0.2")
        .from(grapesLogo.current, { autoAlpha: 0, y: -50 }, "-=0.2")
        .from(btn.current, { autoAlpha: 0, y: -50 }, "-=0.2")
        .from(
          container_nav.current,
          { autoAlpha: 0, y: -50, duration: 0.4, stagger: 0.1 },
          "-=0.2"
        )
        .from(navImages.current, { autoAlpha: 0, y: -50 });
    };
    revealAnim();
  }, []);

  return (
    <div className="bg-gray-100">
      <nav className="bg-gradient-to-r from-purple-500 to-pink-500 absolute mt-0 z-20 w-full h-20 flex justify-between items-center">
        <div className="flex justify-start invisible" ref={navImages}>
          <img
            className="w-10"
            src="/barrel.svg"
            alt="barrel"
            ref={logo_barrel}
          />
        </div>
        <div
          className="text-white flex justify-center invisible"
          ref={container_nav}
        >
          <a className="mr-10 " href="#">
            HOME
          </a>
          <a className="mr-10 " href="#">
            WINES
          </a>
          <a className="" href="#">
            CONTACT
          </a>
        </div>
        <div className="flex justify-end invisible" ref={navImages}>
          <img className="w-10" src="/leaf.svg" alt="leaf" ref={logo_leaf} />
        </div>
      </nav>
      <div className="w-full h-full" ref={home}>
        <div
          className="absolute w-full h-full bg-black mt-0 mr-0 ml-0 mb-0 z-10 opacity-60"
          ref={overlay}
        ></div>
        <video
          className="object-cover	w-full h-full absolute mt-0 ml-0"
          src="/grappe-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div
          className="w-px-600 mx-auto relative top-40 text-white z-50"
          ref={home_content}
        >
          <h1
            className="text-center uppercase text-4xl leading-4 invisible"
            ref={header}
          >
            Exceptional Vinyards
          </h1>
          <div
            className="h-0 w-0.5 bg-white mx-40 my-auto relative ml-40"
            ref={middle_line}
          ></div>
          <img
            ref={grapesLogo}
            className="w-20 fill-white block my-0 mx-auto mt-40 invisible"
            src="/grape.svg"
            alt="grape"
          />
          <button
            className="block text-lg border-2 rounded bg-transparent text-white my-12 mx-auto mt-10 py-4 px-7 cursor-pointer invisible"
            ref={btn}
          >
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeGsap;
