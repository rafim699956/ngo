import React from 'react'

const SectionLabel = ({label}) => {
  return (
    <div className='flex items-center gap-6'>
        <span className='border-b-2 border-secondary w-[4.5rem]'></span>
        <p className="font-roboto font-bold text-base leading-[1.188rem] text-secondary uppercase tracking-[0.125rem]">{label}</p>
    </div>
  )
}

export default SectionLabel