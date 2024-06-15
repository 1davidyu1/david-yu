"use client";

import { GeistSans } from 'geist/font/sans';
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image"

export const Navbar = () => {
    const scrolled = useScrollTop();
    return (
        <div className='flex justify-center'>
            <div className={cn("px-4 z-50 fixed bg-white py-6 sm:py-8 flex items-center justify-between max-w-2xl w-full", scrolled && "border-b shadow-sm sm:border-none sm:shadow-none")}>
                <div className='flex gap-4 align-center items-end'>
                    <Link href="/">
                        <Image 
                            src="./DavidYu.svg"
                            height={40}
                            width={140}
                            alt="David Yu"
                        />
                    </Link>
                    <Link href="https://x.com/1davidyu1">
                        <h1 className="text-lg text-gray-600 sm:block hidden">
                            @1davidyu1
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center gap-x-4">
                    <Link href="https://x.com/1davidyu1">
                        <Twitter className="text-muted-foreground text-gray-600 h-5 w-5"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/david-yu-871202244/">
                        <Linkedin className="text-muted-foreground text-gray-600 h-5 w-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
