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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IoIosArrowDown } from "react-icons/io";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import Link from "next/link";
import { blogData } from "@/utils/blogData";

const handleSubmit = () => {};
export default function Navbar() {
  const { toast } = useToast();
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-gray-50 h-16 w-full  flex items-center">
        <WidthWrapper className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer ">
            <Image alt="" src={"/logo.png"} width={50} height={20} />
            <Link href={"/"}>
              <p className="font-semibold tracking-wider">TheGlassUniverse</p>
            </Link>
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
                {blogData.map((ele, idx) => (
                  <Link key={idx} href={`blogs/${ele._id}`}>
                    <p className="border-b p-2 flex items-center justify-center cursor-pointer uppercase">
                      {ele.title}
                    </p>
                  </Link>
                ))}
              </HoverCardContent>
            </HoverCard>
            <Link href={"/blogs"}>
              <p className="text-sm font-semibold cursor-pointer text-gray-700">
                Blogs
              </p>
            </Link>
            <Link href={"/news"}>
              <p className="text-sm font-semibold cursor-pointer text-gray-700">
                News
              </p>
            </Link>
          </div>
          <div className=" w-[300px] flex items-center justify-end">
            <Dialog>
              <DialogTrigger className="rounded-full px-6 border border-[#3764eb] text-[#3764eb] text-sm py-2 tracking-wider">
                {" "}
                Query?
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Ask your query here</DialogTitle>
                  <DialogDescription className="mt-4">
                    <Input
                      placeholder="Your Phone number"
                      type="number"
                      className="mt-4"
                    />
                    <Textarea placeholder="write your query" className="mt-4" />
                    <Button
                      className="w-full mt-4"
                      onClick={() => {
                        toast({
                          title: "Scheduled: Catch up",
                          description: "Friday, February 10, 2023 at 5:57 PM",
                        });
                      }}
                    >
                      Submit
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
    </div>
  );
}
