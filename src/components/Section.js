import React from 'react'

const Section = ({ Icon , title, color ,selected}) => {
  return (
    <div className={`flex items-center border-b-[2px]  p-[15px] min-w-[200px] cursor-pointer border-neutral-100 text-gray-500 ${selected ? "!bg-neutral-100 !border-[3px] " : "!border-0"} space-x-[15px] hover:bg-neutral-100 hover:!border-[3px]`} 
        style={{
            borderBottom: `3px solid ${color} `,
            color: `${selected && color} `,
        }}>
        <Icon/>
        <h4 className="text-[14px] capitalize font-bold">{ title }</h4>
    </div>
  )
}

export default Section