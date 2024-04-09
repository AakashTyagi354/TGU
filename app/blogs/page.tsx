import BlogCart from "@/components/BlogCart";
import WidthWrapper from "@/components/WidthWrapper";
import React from "react";

import Link from "next/link";
import { blogData } from "@/utils/blogData";

export default function page() {
  return (
    <div>
      {/* <p className="text-4xl text-gray-600 ">Get articles related to glass here</p> */}
      <div className="w-full mt-12">
        <WidthWrapper className="flex flex-wrap gap-12 ">
          {blogData.map((ele, idx) => (
            <Link key={idx} href={`/blogs/${ele._id}`}>
              <BlogCart data={ele} />
            </Link>
          ))}
        </WidthWrapper>
      </div>
    </div>
  );
}
