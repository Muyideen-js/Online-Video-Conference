import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface HomeCardProps {
  className: string,
  img: string,
  title: string,
  description: string,
  handleClick: () => void,
}

const HomeCard = ({className, img, title, description, handleClick}: HomeCardProps) => {
  return (
    <section>
             <div className={cn(' bg-yellow-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', className)} onClick={handleClick} >
            <div className="flex-center glassmorphism size-12 rounded-[10px]">
                <Image src={img} alt='Add meeting icon' width={20} height={20}/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-lg font-normal'>{description}</p>
            </div>
        </div>
    </section>
  )
}

export default HomeCard