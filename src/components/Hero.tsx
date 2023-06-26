import Image from "next/image";
import prakashImage from "@/images/prakash.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="flex h-[100vh] pt-[50px] px-[100px] mb-[150px]"
    >
      <div className="flex-1 flex flex-col  justify-center">
        <p className="text-[#8e7dbe] font-bold text-[50px]">HELLO</p>
        <p className="font-bold text-[40px]">I Am Prakash Yari.</p>
        <p className="text-[white] my-[15px]">
          I am just here to tell i am good web designer. if you hire me i will
          make you happy. I am so excited to work with you if you give me a
          chanceee.
        </p>
        <div className="mt-[15px]">
          <button className="border transition-[0.25s] hover:bg-[#8e7dbe] hover:border-[#8e7dbe] font-bold py-[6px] px-[15px]">
            HIRE ME
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image className=" w-[200px]" src={prakashImage} alt="image" />
      </div>
    </section>
  );
}

export default Hero;
