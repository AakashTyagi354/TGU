export default function HomeBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "url('https://diyquickly.com/wp-content/uploads/2021/07/New-Project-20-1-1024x512.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white/20  "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[600px] lg:items-center lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#3764eb]">
            Your Source for Quality Wholesale Glass
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-600 text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
            >
              Check out our blogs
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
