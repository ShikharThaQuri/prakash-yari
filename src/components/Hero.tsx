import Image from "next/image";
import prakashImage from "@/images/prakash.jpg";
import { useEffect, useRef, useState } from "react";

import styles from "./Hero.module.css";

function Hero() {
  const [isVisible, setIsVisible] = useState<boolean>();
  const ref1 = useRef() as any;

  useEffect(() => {
    const ovserver = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsVisible(entry.isIntersecting);
    });

    ovserver.observe(ref1.current);
  }, []);

  return (
    <section
      ref={ref1}
      id="home"
      className="overflow-hidden flex h-[100vh] pt-[50px] px-[100px] mb-[150px]"
    >
      <div className={`flex-1 flex flex-col  justify-center `}>
        <p
          className={`text-[#8e7dbe] font-bold text-[50px] ${
            styles.firstChild
          } ${isVisible ? styles.slideIn1 : ""}`}
        >
          HELLO
        </p>
        <p
          className={`font-bold text-[40px] delay-200 ${styles.firstChild} ${
            isVisible ? styles.slideIn2 : ""
          }`}
        >
          I Am Prakash Yari.
        </p>
        <p
          className={`text-[white] my-[15px] ${styles.firstChild} ${
            isVisible ? styles.slideIn3 : ""
          }`}
        >
          I am just here to tell i am good web designer. if you hire me i will
          make you happy. I am so excited to work with you if you give me a
          chanceee.
        </p>
        <div className="mt-[15px]">
          <button
            className={`border transition-[0.25s] hover:bg-[#8e7dbe] hover:border-[#8e7dbe] font-bold py-[6px] px-[15px] ${
              styles.firstChild
            } ${isVisible ? styles.slideIn4 : ""}`}
          >
            HIRE ME
          </button>
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center items-center ${
          styles.lastChild
        } ${styles.firstChild} ${isVisible ? styles.slideInPhoto : ""}`}
      >
        <Image className=" w-[200px]" src={prakashImage} alt="image" />
      </div>
    </section>
  );
}

export default Hero;
