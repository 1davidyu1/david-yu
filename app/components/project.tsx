import { ExternalLink } from 'lucide-react';
import Link from "next/link"

interface ProjectProps {
    name: string;
    url: string;
    description: string; 
}

export const Project = ({
    name,
    url,
    description
}:ProjectProps) => {
    return (
        <div>
            <Link
                href={url}
                className='border p-3 rounded-lg flex flex-col text-base'
            >
                <div className='flex justify-between items-center w-full pb-1'>
                    {name}
                    <ExternalLink
                        className='text-neutral-400 h-4 w-4'
                    />
                </div>
                <div className='text-neutral-400 line-clamp-2 text-sm pr-3'>
                    {description}    
                </div>
            </Link>
        </div>
    )
    
}
