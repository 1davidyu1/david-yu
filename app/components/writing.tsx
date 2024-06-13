import Image from "next/image"
import Link from "next/link"

interface WritingProps {
    image: string,
    title: string,
    url: string,
    description: string,
}

export const Writing = ({
    image,
    title,
    url,
    description
}: WritingProps) => {
    return (
        <div className="flex gap-2 border-t border-dashed py-2">
            <Link
                href={url}
            >
                <Image
                    src={image}
                    height="100"
                    width="100"
                    alt={title}
                    className="border rounded-md border-neutral-300"
                />
            </Link>
            <div className="text-base flex gap-3">
                <Link
                    href={url}
                >
                    {title}
                </Link>
                <p className="text-sm text-neutral-400">
                    {description}
                </p>
            </div>
        </div>
    )
}   