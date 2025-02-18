import React from 'react'

function FormInput({labelFor, labelName, inputType, inputPlaceholder, value, onChange, error, name}) {
  return (
    <div className='flex flex-col'>
      <label className='text-[#434343]' htmlFor={labelFor}>{labelName}</label>

      <input className='w-full min-w-[450px] bg-[#d9dde1] rounded-md pl-[10px] h-[35px] outline-none' type={inputType} placeholder={inputPlaceholder} onChange={onChange} value={value} name={name}/>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  )
}

export default FormInput
