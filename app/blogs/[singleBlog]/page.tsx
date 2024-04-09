"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import WidthWrapper from "@/components/WidthWrapper";
import { BookMarked, Heart, Loader2, Share } from "lucide-react";
import { useParams } from "next/navigation";
import { blogData } from "@/utils/blogData";
interface BlogCartProps {
  data: {
    img: any;
    title: string;
    desc: string;
    subTitle: string;
    desc2: string;
  };
}

export default function SingleBlogPage() {
  const [singleData, setSingleData] = useState(null);
  const { singleBlog } = useParams();
  console.log(singleBlog);
  useEffect(() => {
    setTimeout(() => {
      const foundBlog = blogData.find(
        (blog) => blog._id === parseInt(singleBlog)
      );

      if (foundBlog) {
        setSingleData(foundBlog);
      }
    }, 1000);
  }, [singleBlog]);

  if (!singleData) {
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 />
      </div>
    );
  }

  return (
    <div>
      <WidthWrapper className="my-12">
        <div className="w-full flex justify-center">
          <p className="text-3xl font-bold items-center">{singleData.title}</p>
        </div>
        <div className="my-4 border-b border-t h-12 w-[60%] mx-auto flex items-center justify-between">
          <p className="text-sm tracking-wide text-gray-500 font-semibold">
            10 Jan 2024
          </p>
          <div className=" flex gap-4">
            <Share size={18} />
            <Heart size={18} />
            <BookMarked size={18} />
          </div>
        </div>
        <div className="relative w-[60%] h-[350px] mx-auto">
          <Image src={singleData.img} alt="" fill className="object-fill" />
        </div>
        <div className="mx-auto w-[60%] mt-6">
          <p className="tracking-wide text-gray-500">{singleData.desc}</p>
          <p className="font-medium text-lg mt-6">{singleData.subTitle}</p>
          <p className="tracking-wide text-gray-500 mt-4">{singleData.desc2}</p>
        </div>
      </WidthWrapper>
    </div>
  );
}
