import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import FloatingImage from './components/Story'
import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"

function App() {
  const comp = useRef(null);
  const [showContent, setShowContent] = useState(false); // To manage showing the content after animation

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()

      t1.from("#intro-slider", {
        scale: 1, // Start from the center (scaled down)
        duration: 1.5,
        ease: "power3.out",
        backgroundColor: "#000000", // Same as the intro-slider background
      })

        .to("#intro-slider", {
          // scale: 1, // Expand to full size
          duration: 1.3,
          ease: "power3.inOut",
          backgroundColor: "#5729ff", // Optional: Same color as slider bg
        })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        }).to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-+30",
          stagger: 0.5,
        })
        .to("#intro-slider", {
          scale: 0, // Shrink back to center
          // opacity: 0, // Fade out the intro slider
          duration: 0.5,
          onComplete: () => setShowContent(true) // Show content after animation finishes
        })

    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={comp} className='relative min-h-screen w-screen overflow-x-hidden bg-[#f5f3ff]'>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-black font-extrabold space-y-10 text-black absolute top-0 left-0 font-spaceGrotesk z-[90] w-full flex flex-col justify-center items-center tracking-tight"
      >
        <h1 className="special-font hero-heading  z-40 " id="title-1">
          WELC<b>O</b>ME
        </h1>
        {/* <h1 className="text-4xl md:text-6xl lg:text-8xl text-center" >
          Welcome
        </h1> */}
        <h1 className="special-font hero-heading uppercase" id="title-2">
          to
        </h1>
        <h1 className="special-font hero-heading uppercase text-blue-75" id="title-3">
          Ze<b>n</b>try
        </h1>
        <div id="title-3" className='absolute bottom-0 left-0 w-full'>

          <h1 className="  text-lg md:text-xl   lg:text-2xl text-center">
            Re-developed by <span className='special-font hero-heading-s text-sm uppercase'>Om Nandurkar</span>
          </h1>
        </div>
      </div>
      {/* </div> */}

      {/* The rest of your content */}
      {
        showContent && (
          <>
            <NavBar />
            <Hero />
            <About />
            <Features />
            <FloatingImage />
            <Contact />
            <Footer />
          </>
        )
      }
    </main >
  )
}

export default App;
