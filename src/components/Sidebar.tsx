import React from 'react'

export const Sidebar:React.FC = () => {
  return (
    <aside className='w-[282px] bg-[#171717] h-screen border-r-[#ffffff1a] border-r-[1px]'>
        <div className='pl-[20px] pt-[20px]'>
            <button className='text-[22px] px-[50px] rounded-md py-[8px] bg-[#C6C7F8]'>new chat</button>
        </div>
    </aside>
  )
}
