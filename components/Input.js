import React, { useState } from 'react'
import Image from 'next/image'
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

function Input() {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(null);
  return (
    <div className={`border-b border-gray-700 p-3 flex space-x-3 `}>
      <div>
        <Image src="/images/fb.png" alt="wahab" width={40} height={40}
          className="rounded-full cursor-pointer " />
      </div>

      <div className="w-full divide-y divide-gray-700 ">
        <div className={``}>
          <textarea
            value={input}
            rows="2"
            onChange={(e) => setInput(e.target.value)}
            placeholder="whats's happening?"
            className="bg-transparent outline-none placeholder-gray-500 
              text-[#d9d9d9] text-lg tracking-wide w-full min-h-[50px]"/>
          {
            selected && (
              <div className="relative">
                <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center
                justify-center top-1 left-1 cursor-pointer" onClick={()=>setSelected(null)}>
                  <XIcon className="text-white h-5" />
                </div>
                <img src={selected} alt="" className="rounded-2xl max-h-80 object-contain " />
              </div>
            )
          }

        </div>
        <div className="flex items-center justify-between pt-2.5">
              <div className="flex items-center">
                <div className="icon">
                   <PhotographIcon className="h-[22px] text-[#1d9bf0]"/> 
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Input