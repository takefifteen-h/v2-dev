import React from 'react'
import Image from 'next/image' 
import ServiceSvg from './ui/ServiceSvg'

const ServiceSection = () => {
  return (
    <section className='my-[10%] section-header master-container' aria-label='services'>

        {/* Header */}
        <header className='select-none flex items-center gap-x-2'>
           <div className="relative w-[30px] h-[30px]">
           {/* <Image 
            src="images/icons/icon-1.svg"
            alt="services icon"
            fill
            /> */}
            <ServiceSvg />
           </div>
        <h2 className="w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600">services</h2>
        </header>
    </section>
  )
}

export default ServiceSection