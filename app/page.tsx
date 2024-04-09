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
                  range of SURFACES superior quality, immaculate finish,
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
                  range of SURFACES superior quality, immaculate finish,
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
          <p className="text-gray-500 text-xs tracking-wide">
            You deserve the best and that what we continuously work on.
            Follow our Instagram page to stay updated with our latest
            innovations.
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
      <div>
        <WidthWrapper className="my-12">
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Read trusted reviews from our customers
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Paul Starr
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa sit rerum incidunt, a consequuntur recusandae ab saepe
                    illo est quia obcaecati neque quibusdam eius accusamus error
                    officiis atque voluptates magnam!
                  </p>
                </blockquote>
              </div>
            </div>
          </section>
        </WidthWrapper>
      </div>
    </div>
  );
}
