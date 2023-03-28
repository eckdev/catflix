import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react'

type Props = {}
const SLIDES = Array.from(Array(10).keys());
const Suggestions = (props: Props) => {
  return (
    <div className='relative flex items-center'>
    <button
    className="opacity-50 cursor-pointer hover:opacity-100"
    onClick={() => {
      let slider = document.getElementById('slider') as HTMLElement;
      slider.scrollLeft = slider.scrollLeft - 500;
    }}
  >
  <ChevronLeftIcon className="h-10 w-10 text-white"/>
  </button>
      <div
        id='slider'
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {SLIDES.map((item) => (
          <Image
          key={item}
            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
            src="https://cdn.ssportplus.com/1/3165/s1GZZhTd3T57/s1GZZhTd3T57.jpg"
            alt='/'
            width={220}
            height={200}
          />
        ))}
      </div>
      <button
    className=""
    onClick={() => {
      let slider = document.getElementById('slider') as HTMLElement;
      slider.scrollLeft = slider.scrollLeft + 500;
    }}
  >
  <ChevronRightIcon className="h-10 w-10 text-white"/>
  </button>
    </div>
  )
}

export default Suggestions