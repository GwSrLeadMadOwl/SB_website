import { useRef, useLayoutEffect, useEffect } from "react";
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/nav-bar/nav-bar';

import Home from "./sections/home/home";
import Video from "./sections/video/video";
import Art from "./sections/art/art";
import Blogs from "./sections/blogs/blogs";
import Social from "./sections/social/social";

function App() {
  // const { hoc, setHoc } = useState(true);
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();

  const dur = 1;

  // window.addEventListener("load", () => {
  //   if (hoc) {
  //     setHoc(false);
  //   }
  // });

  useLayoutEffect(() => {
    gsap.fromTo(".sky",
      {
        scale: 1.05,
        y: "-10vh"
      },
      {
        scale: 1,
        duration: dur
      }
    );

    gsap.fromTo(".hotel",
      {
        top: "110vh"
      },
      {
        top: "10vh",
        duration: dur
      }
    );

    const tl = gsap.timeline();
    tl.fromTo(".sb-logo",
      {
        top: "110vh"
      },
      {
        duration: dur + 0.1,
        top: "40%"
      })
      .fromTo(".sb-logo",
        {
          top: "40%"
        },
        {
          top: () => { return window.innerHeight + 15 + `px`; },
          scale: 0.2,
          ease: "sine.out",
          scrollTrigger: {
            trigger: ".logo_container",
            toggleActions: "resume complete reverse complete",
            start: "70% 50%",
            end: "bottom 0",
            scrub: true,
            // pin: true,
            // markers: true,
            id: "FIXING_LOGO_TOP",
          }
        })
      .to(".sb-logo",
        {
          position: "fixed",
          top: "15px",
          scrollTrigger: {
            trigger: ".main",
            toggleActions: "play none none reverse",
            start: "20% top",
            end: "bottom bottom",
            // markers: true,
            id: "PIN_LOGO"
          }
        })
      ;
  }, []);

  return (
    <>
      {/* <div className="hoc" style={{ display: hoc ? 'block' : 'none' }}>Loading...</div> */}

      <Navbar />
      <div className="main">

        <img className="bg_img sky" src="/img/sky_bg.png" alt="sky" ref={el} />
        <img className="bg_img bg_1" src="/img/bg_1.png" alt="bg_1" ref={el} />
        <img className="bg_img hotel" src="/img/main.png" alt="hotel" ref={el} />

        <img className="bg_img fg_2" src="/img/fg_2.png" alt="fg_2" ref={el} />
        <img className="bg_img fg_1" src="/img/fg_1.png" alt="fg_1" ref={el} />
        <div className="logo_container">
          <img className="sb-logo" src="/img/SB_logo.png" alt="LOGO" ref={el} />
        </div>

        <Home />
        <Video />
        <Art />
        <Blogs />
        <Social />
      </div>
    </>

  );
}

export default App;
