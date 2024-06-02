"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin } from "lucide-react";

export const Navbar = () => {
    const scrolled = useScrollTop();
    return (
        <div className={cn("z-50 bg-background fixed top-16 left-0 right-0 flex items-center justify-between p-6", scrolled && "border-b shadow-sm")}>
            <h1 className="pl-16 text-2xl font-bold">David</h1>
            <div className="flex items-center gap-x-2 pr-16">
                <Twitter className="text-muted-foreground h-5 w-5"/>
                <Linkedin className="text-muted-foreground h-5 w-5"/>
            </div>
        </div>
    )
}
