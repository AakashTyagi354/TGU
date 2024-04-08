"use client";

import Image from "next/image";
import WidthWrapper from "./WidthWrapper";
import { IoCallOutline } from "react-icons/io5";

import { MdOutlineMail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { ArrowDown, ArrowDown10, ArrowDownFromLine } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
  return (
    <>
      <div className="bg-gray-50 h-16 w-full sticky top-0 flex items-center">
        <WidthWrapper className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image alt="" src={"/logo.png"} width={50} height={20} />
            <p className="font-semibold tracking-wider">TheGlassUniverse</p>
          </div>
          <div className="ml-12 flex items-center gap-6">
            <HoverCard>
              <HoverCardTrigger className="flex items-center gap-1 text-sm font-semibold cursor-pointer text-gray-700 ">
                Mirrors
                <IoIosArrowDown />
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col gap-1 bg-white text-sm text-gray-600">
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Bathroom Mirrors
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Bathroom Mirrors
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Bathroom Mirrors
                </p>
              </HoverCardContent>
            </HoverCard>
            <p className="text-sm font-semibold cursor-pointer text-gray-700">
              LED Mirrors
            </p>
            <HoverCard>
              <HoverCardTrigger className="flex items-center gap-1 text-sm font-semibold cursor-pointer text-gray-700 ">
                Glass
                <IoIosArrowDown />
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col gap-1 bg-white text-sm text-gray-600">
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Frosted Glass
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Laminated Glass
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Low-E Glass
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Tempered Glass
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Tempered Glass
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Tinted Glass
                </p>
                <p className="border-b p-2 flex items-center justify-center cursor-pointer">
                  Clear Glass
                </p>
              </HoverCardContent>
            </HoverCard>
            <p className="text-sm font-semibold cursor-pointer text-gray-700">
              Blogs
            </p>
            <p className="text-sm font-semibold cursor-pointer text-gray-700">
              News
            </p>
          </div>
          <div className=" w-[300px] flex items-center justify-end">
            <button className="rounded-full px-6 border border-[#3764eb] text-[#3764eb] text-sm py-2 tracking-wider">
              Query?
            </button>
          </div>
        </WidthWrapper>
      </div>
      <div className="flex w-full h-10 bg-[#3764EB] text-white">
        <WidthWrapper className="h-full items-center flex justify-between">
          <div className="flex h-full items-center">
            <p className="text-sm">
              Exim Consultancy | International Logistics | One Stop EXIM
              Solution
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-1 items-center">
              <IoCallOutline />
              <p className="text-sm">+91 9321890890</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdOutlineMail />
              <p className="text-sm">info@afleo.com</p>
            </div>
          </div>
          <div className="flex gap-4">
            <FaYoutube size={24} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaLinkedin size={20} className="cursor-pointer" />
          </div>
        </WidthWrapper>
      </div>
    </>
  );
}
