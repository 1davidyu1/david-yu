"use client";

import { GeistSans } from 'geist/font/sans';
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    const scrolled = useScrollTop();
    return (
        <div className='flex justify-center'>
            <div className={cn("z-50 fixed top-16 flex items-center justify-between max-w-xl w-full", scrolled && "border-b shadow-sm")}>
                <Link href="/">
                    <h1 className="text-3xl font-bold">
                        David Yu
                    </h1>
                </Link>
                <div className="flex items-center gap-x-4">
                    <Link href="https://x.com/1davidyu1">
                        <Twitter className="text-muted-foreground hover:text-black h-5 w-5"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/david-yu-871202244/">
                        <Linkedin className="text-muted-foreground hover:text-black h-5 w-5"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
