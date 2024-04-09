import Image from "next/image";

interface BlogCartProps {
  data: {
    img: any;
    title: string;
    desc: string;
    subTitle: string;
    desc2: string;
  };
}

export default function BlogCart({ data }: BlogCartProps) {
  return (
    <div className="w-[400px]">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg  ">
        <Image alt="" src={data.img} className="h-56 w-full object-fill" />

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {" "}
            10th Oct 2022{" "}
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">{data.title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {data.desc}
          </p>
        </div>
      </article>
    </div>
  );
}
