import styles from "./Services.module.css";

import JavascriptIcon from "@mui/icons-material/Javascript";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Services() {
  return (
    <section
      id="skills"
      className={`${styles.wrapper} relative pt-[80px] my-[200px]`}
    >
      <div className={`${styles.centerLine}`}>
        <a href="#skills">
          <ExpandLessIcon
            className={`absolute bottom-[0px] left-[50%] translate-x-[-50%] right-[-60px] bg-[#fff] text-[#fb8500] h-[40px] w-[40px] text-center rounded-[50%] text-[17px]`}
          />
        </a>
      </div>
      <div
        className={`${styles.row} ${styles.row1} flex justify-start  text-[black] font-bold px-[50px] mb-[50px]`}
      >
        <div className={`${styles.dBox}`}>
          <JavascriptIcon
            className={`absolute top-[7px] right-[-60px] bg-[#fff] text-[#fb8500] h-[40px] w-[40px] text-center rounded-[50%] text-[17px]`}
          />
          <h1>JAVASCRIPT</h1>
          <p>
            I started learning Javascript when i was kid. I was 15 years old at
            that time.
          </p>
        </div>
      </div>
      <div
        className={`${styles.row} ${styles.row2} flex justify-end text-[black] font-bold px-[50px] my-[50px]`}
      >
        <div className={`${styles.dBox}`}>
          <SentimentSatisfiedAltIcon
            className={`absolute top-[7px] left-[-60px] bg-[#fff] text-[#fb8500] h-[40px] w-[40px] text-center rounded-[50%] text-[17px]`}
          />
          <h1>PYTHON</h1>
          <p>I started learning Phthon when i was 18 years old.</p>
        </div>
      </div>
      <div
        className={`${styles.row} ${styles.row1} flex justify-start  text-[black] font-bold px-[50px] mb-[50px]`}
      >
        <div className={`${styles.dBox}`}>
          <JavascriptIcon
            className={`absolute top-[7px] right-[-60px] bg-[#fff] text-[#fb8500] h-[40px] w-[40px] text-center rounded-[50%] text-[17px]`}
          />
          <h1>JAVASCRIPT</h1>
          <p>
            I started learning Javascript when i was kid. I was 15 years old at
            that time.
          </p>
        </div>
      </div>
      <div
        className={`${styles.row} ${styles.row2} flex justify-end text-[black] font-bold px-[50px] my-[50px]`}
      >
        <div className={`${styles.dBox}`}>
          <SentimentSatisfiedAltIcon
            className={`absolute top-[7px] left-[-60px] bg-[#fff] text-[#fb8500] h-[40px] w-[40px] text-center rounded-[50%] text-[17px]`}
          />
          <h1>PYTHON</h1>
          <p>I started learning Phthon when i was 18 years old.</p>
        </div>
      </div>
      <div
        className={`${styles.row} ${styles.row1} flex justify-start  text-[black] font-bold px-[50px] mb-[50px]`}
      >
        <div className={`${styles.dBox}`}>
          <JavascriptIcon
            className={`absolute top-[7px] right-[-60px] bg-[#fff] text-[#fb8500] h-[40px] w-[40px] text-center rounded-[50%] text-[17px]`}
          />
          <h1>JAVASCRIPT</h1>
          <p>
            I started learning Javascript when i was kid. I was 15 years old at
            that time.
          </p>
        </div>
      </div>
      <div
        className={`${styles.row} ${styles.row2} flex justify-end text-[black] font-bold px-[50px] my-[50px]`}
      >
        <div className={`${styles.dBox}`}>
          <SentimentSatisfiedAltIcon
            className={`absolute top-[7px] left-[-60px] bg-[#fff] text-[#fb8500] h-[40px] w-[40px] text-center rounded-[50%] text-[17px]`}
          />
          <h1>PYTHON</h1>
          <p>I started learning Phthon when i was 18 years old.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
