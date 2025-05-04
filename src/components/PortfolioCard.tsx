import Link from 'next/link';
import { ReactElement } from 'react';

type PortfolioCardProps = {
    title: string,
    subtitle: String,
    imgSrc?: string,
    link: string,
}

export const PortfolioCard = ({
    title,
    subtitle,
    imgSrc,
    link,
}: PortfolioCardProps) => {
    return (
        <div className="relative">
            <div className="lg:w-[40vw] w-[85vw] rounded-xl shadow-lg bg-stone-100 mb-4 hover:shadow-2xl hover:bg-stone-200 transition-shadow duration-300 ease-in-out">
            <Link href={link}>
                <div className="flex flex-col md:m-0 m-2 ">
                    {imgSrc && (
                        
                        <img 
                            className="w-auto rounded-xl object-cover lg:m-6 m-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                            src={imgSrc}
                            alt={title}
                        />
                    )}
                    
                        <div className="flex place-content-start flex-col mx-8 mb-8">
                            <div className="md:text-4xl text-xl my-2">{title}</div>
                            <div className="md:text-lg h-18 text-left text-sm md:mt-4 mt-2">
                                {subtitle}
                            </div>
                        </div>
                    
                </div>
                </Link>
            </div>
        </div>
    );
};
