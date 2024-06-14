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
        <div>
            <Link
                href={url}
                className="flex gap-2 border-t border-gray-300 border-dashed py-2"
            >
                <Image
                    src={image}
                    height="120"
                    width="120"
                    alt={title}
                    className="border rounded-md border-gray-300"
                />
                <div className="text-base gap-3 items-center justify-center my-auto ml-2">
                        {title}
                    <p className="text-sm text-gray-400 mt-1">
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    )
}   