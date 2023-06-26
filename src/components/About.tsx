import Image from "next/image";

import prakashImage from "@/images/prakash.jpg";

function About() {
  return (
    <section
      id="about"
      className="text-center flex flex-col justify-center items-center h-[100vh] px-[100px]"
    >
      <Image
        className="rounded-[100px] object-cover object-top w-[200px] h-[200px]"
        src={prakashImage}
        alt="image"
      />
      <h1 className="text-[20px] text-[#8e7dbe] font-bold my-[30px]">
        PRAKASH YARI
      </h1>
      <p className="mx-[200px]">
        What is your project named? my-app Would you like to use TypeScript with
        this project? No / Yes Would you like to use ESLint with this project?
        No / Yes Would you like to use Tailwind CSS with this project? No / Yes
        Would you like to use `src/` directory with this project? No / Yes Use
        App Router (recommended)? No / Yes Would you like to customize the
        default import alias? No / Yes
      </p>
    </section>
  );
}

export default About;
