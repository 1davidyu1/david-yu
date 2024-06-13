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
            >
                <Image
                    src={logo}
                    height="25"
                    width="25"
                    alt={company}
                    className="border rounded-md border-neutral-300"
                />
            </Link>
            <div className="text-base flex gap-3">
                <Link
                    href={url}
                >
                    {company}
                </Link>
                <p className="text-sm text-neutral-400">
                    {role}
                </p>
            </div>
            <div className="ml-auto text-sm text-neutral-400">
                    {period}
            </div>
        </div>
    )
}   