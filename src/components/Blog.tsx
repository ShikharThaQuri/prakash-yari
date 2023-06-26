import Image from "next/image";

import imageTwo from "@/images/imageTwo.jpg";
import imageOne from "@/images/imageOne.jpg";

function Blog() {
  return (
    <section id="blog" className=" px-[100px] py-[100px]">
      <h1 className="text-[20px] font-bold text-[#8e7dbe] mb-[10px]">BLOGS</h1>
      <div className="flex flex-wrap">
        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageOne}
            alt="imageOne"
          />
        </div>
        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageTwo}
            alt="imageTwo"
          />
        </div>
        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageOne}
            alt="imageOne"
          />
        </div>
        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageTwo}
            alt="imageTwo"
          />
        </div>

        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageOne}
            alt="imageOne"
          />
        </div>
        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageTwo}
            alt="imageTwo"
          />
        </div>
        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageOne}
            alt="imageOne"
          />
        </div>
        <div className="border mx-[15px] my-[15px] w-[250px] h-[200px]">
          <Image
            className="w-[100%] h-[100%] object-cover object-top"
            src={imageTwo}
            alt="imageTwo"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
