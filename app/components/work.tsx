import Image from "next/image"
import Link from "next/link"

interface WorkProps {
    logo: string,
    url: string,
    company: string,
    role: string,
    period: string
}

export const Work = ({
    logo,
    url,
    company,
    role,
    period
}: WorkProps) => {
    return (
        <div className="flex gap-2 border-t border-dashed py-2">
            <Link
                href={url}
                className=""
            >
                <Image
                    src={logo}
                    height="25"
                    width="25"
                    alt={company}
                    className="border rounded-md border-slate-300"
                />
            </Link>
            <div className="text-base flex gap-3">
                <p className="">
                    {company}
                </p>
                <p className="text-sm text-slate-400">
                    {role}
                </p>
            </div>
            <div className="ml-auto text-sm text-slate-400">
                    {period}
            </div>
        </div>
    )
}   