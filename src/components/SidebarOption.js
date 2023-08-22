import React from 'react'

const SidebarOption = ({ Icon , title , number ,selected }) => {
  return (
    <div className={`flex group space-x-[20px]  items-center h-[40px] px-[10px] cursor-pointer text-[#818181] rounded-r-[20px] hover:bg-[#fcecec] hover:text-[#c04b37] hover:font-bold ${selected && "bg-[#fcecec] text-[#c04b37] "} min-w-[180px]`} >
        <Icon className={`p-[2px]  group-hover:font-bold leading-xl !w-[30px] ${selected && "!font-bold"}`}/>
        <h3 className={`font-normal text-[14px] flex-1 group-hover:font-bold leading-xl  ${selected && "!font-bold"}`}>{title}</h3>
        <p className={` group-hover:block font-light group-hover:font-bold leading-xl  ${selected ?"block !font-bold":"hidden"}`}>{number}</p>
    </div>
  )
}

export default SidebarOption