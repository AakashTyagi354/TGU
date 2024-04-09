import Collection from "@/components/Collection";
import FNQ from "@/components/FNQ";
import HomeBanner from "@/components/HomeBanner";
import WidthWrapper from "@/components/WidthWrapper";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const videoData = [
  {
    img: "https://images-cdn.ubuy.ae/633fec5a5312f5194e532316-sunny-shower-glass-door-sliding-shower.jpg",
  },
  {
    img: "https://images-cdn.ubuy.ae/633fec5a5312f5194e532316-sunny-shower-glass-door-sliding-shower.jpg",
  },
  {
    img: "https://rukminim2.flixcart.com/image/850/1000/l367dzk0/mirror/k/b/5/framed-origin-triple-light-bathroom-mirror-round-shape-glass-original-imagecspaa7ayhdv.jpeg?q=90&crop=false",
  },
  {
    img: "https://images-cdn.ubuy.ae/633fec5a5312f5194e532316-sunny-shower-glass-door-sliding-shower.jpg",
  },
  {
    img: "https://images-cdn.ubuy.ae/633fec5a5312f5194e532316-sunny-shower-glass-door-sliding-shower.jpg",
  },
  {
    img: "https://images-cdn.ubuy.ae/633fec5a5312f5194e532316-sunny-shower-glass-door-sliding-shower.jpg",
  },
];
export default function Home() {
  return (
    <div className="">
      <div className="">
        <HomeBanner />
      </div>
      <div className="bg-[#F6F6F6] h-[800px] sm:h-[500px] w-full my-12">
        <WidthWrapper className="flex flex-col w-full">
          <div className="flex flex-col w-full items-center justify-center mt-24 ">
            <p className=" text-3xl px-12 sm:text-5xl font-[200] ">
              THERE IS ALWAYS MORE TO DISCOVER
            </p>
            <p className=" text-gray-600 text-[13px] sm:text-[15px] tracking-wide mt-12 px-12 ">
              <span className="text-gray-900 font-semibold">
                The Glass Universe{" "}
              </span>{" "}
              is an exchanging and dispersion organization managing in a wide
              range of glasses and related items. Built up in Mumbai, we stand
              today as one of India's biggest and most rumored glass exchanging
              organizations. With a broad sourcing system, we source crude
              glasses from everywhere throughout the world and circulate them
              all through India. Working out of current stockrooms in Mumbai
              with robotized dealing with frameworks, we can guarantee very
              snappy turnaround times for glass conveyances, so you have the
              glass exactly when you need it. We offer a wide range of float
              glass products tailored to meet the diverse needs of our
              customers. Whether you require clear glass, tinted glass, low-iron
              glass, or patterned glass, we have a comprehensive selection to
              choose from. Our glass can be customized in terms of size,
              thickness, and shape to accommodate your specific project
              requirements. Our team of skilled professionals is dedicated to
              providing exceptional customer service and technical support. We
              understand that each project is unique, and we work closely with
              our clients to deliver customized solutions that align with their
              vision and objectives. From architects and designers to
              contractors and manufacturers, we serve a wide range of industries
              and collaborate closely with our customers to ensure their
              satisfaction.
            </p>
          </div>
        </WidthWrapper>
      </div>
      <div className=" ">
        <Collection />
        <WidthWrapper>
          <div className="flex gap-6 flex-wrap sm:flex-nowrap    w-full mx-auto mt-12">
            <a href="#" className="group block w-[500px]">
              <div className="relative h-[350px] sm:h-[450px]  transition-all hover:scale-95 hover:opacity-80">
                <img
                  src="https://www.jbglass.in/wp-content/uploads/2020/08/jbglass-swing-home.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  WALTZ . SWING
                </h3>

                <p className="mt-1.5 text-pretty text-xs text-gray-500">
                  Make a grand entrance with WALTZ SWING, designed for a
                  singularly sleek look and nearly effortless motion. Enjoy ease
                  of installation and an immaculate finish, thanks to its
                  superior engineering and design.
                </p>
              </div>
            </a>
            <a href="#" className="group block w-[500px]">
              <div className="relative h-[350px] sm:h-[450px]  transition-all hover:scale-95 hover:opacity-80">
                <img
                  src="https://www.jbglass.in/wp-content/uploads/2020/08/jbglass-waltz-wardrobe.jpg.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  SURFACES . WARDROBE
                </h3>

                <p className="mt-1.5 text-pretty text-xs text-gray-500">
                  Extend the elegance of glass to your wardrobes through our
                  range of SURFACES – superior quality, immaculate finish,
                  endless options and easy to maintain.
                </p>
              </div>
            </a>

            <a href="#" className="group block w-[500px]">
              <div className="relative h-[350px] sm:h-[450px]  transition-all hover:scale-95 hover:opacity-80">
                <img
                  src="https://www.jbglass.in/wp-content/uploads/2020/08/jbglass-swing-home.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  WALTZ . SWING
                </h3>

                <p className="mt-1.5 text-pretty text-xs text-gray-500">
                  Make a grand entrance with WALTZ SWING, designed for a
                  singularly sleek look and nearly effortless motion. Enjoy ease
                  of installation and an immaculate finish, thanks to its
                  superior engineering and design.
                </p>
              </div>
            </a>
          </div>
          <div className="flex gap-6 flex-wrap sm:flex-nowrap    w-full mx-auto mt-12">
            <a href="#" className="group block w-[500px]">
              <div className="relative h-[350px] sm:h-[450px]  transition-all hover:scale-95 hover:opacity-80">
                <img
                  src="https://www.jbglass.in/wp-content/uploads/2020/08/jbglass-swing-home.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  WALTZ . SWING
                </h3>

                <p className="mt-1.5 text-pretty text-xs text-gray-500">
                  Make a grand entrance with WALTZ SWING, designed for a
                  singularly sleek look and nearly effortless motion. Enjoy ease
                  of installation and an immaculate finish, thanks to its
                  superior engineering and design.
                </p>
              </div>
            </a>
            <a href="#" className="group block w-[500px]">
              <div className="relative h-[350px] sm:h-[450px]  transition-all hover:scale-95 hover:opacity-80">
                <img
                  src="https://www.jbglass.in/wp-content/uploads/2020/08/jbglass-waltz-wardrobe.jpg.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  SURFACES . WARDROBE
                </h3>

                <p className="mt-1.5 text-pretty text-xs text-gray-500">
                  Extend the elegance of glass to your wardrobes through our
                  range of SURFACES – superior quality, immaculate finish,
                  endless options and easy to maintain.
                </p>
              </div>
            </a>

            <a href="#" className="group block w-[500px]">
              <div className="relative h-[350px] sm:h-[450px]  transition-all hover:scale-95 hover:opacity-80">
                <img
                  src="https://www.jbglass.in/wp-content/uploads/2020/08/jbglass-swing-home.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 "
                />
              </div>

              <div className="mt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  WALTZ . SWING
                </h3>

                <p className="mt-1.5 text-pretty text-xs text-gray-500">
                  Make a grand entrance with WALTZ SWING, designed for a
                  singularly sleek look and nearly effortless motion. Enjoy ease
                  of installation and an immaculate finish, thanks to its
                  superior engineering and design.
                </p>
              </div>
            </a>
          </div>
        </WidthWrapper>
      </div>
      <div className="bg-[#F6F6F6] h-[550px] my-12">
        <div className="w-full flex flex-col justify-center items-center pt-10 gap-4 ">
          <p className="text-3xl font-[300]">@ J B G L A S S _</p>
          <p className="text-gray-500 text-sm tracking-wide">
            You deserve the best and that's what we continuously work on. Follow
            our Instagram page to stay updated with our latest innovations.
          </p>
        </div>
        <div className=" pl-8 mt-12 w-full h-[250px] flex gap-4 ">
          {videoData.map((ele, idx) => (
            <div
              key={idx}
              className="relative h-full w-[250px]  opacity-90 cursor-pointer flex items-center justify-center"
            >
              <img
                src={ele.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100"
              />
              {/* Icon */}
              <FaPlay className="text-white w-8 h-8 absolute" />
            </div>
          ))}
        </div>
        <div className=" w-full h-[70px] flex justify-center mt-12">
          <button className="flex gap-4 items-center bg-[#363636] text-white h-[70%] px-12 tracking-wider text-[14px] transition-all hover:bg-transparent hover:text-black hover:border">
            <FaInstagram size={18} />
            FOLLOW US ON INSTAGRAM
          </button>
        </div>
      </div>
      <div>
        <WidthWrapper className="my-12">
          <FNQ />
        </WidthWrapper>
      </div>
    </div>
  );
}
