import React from 'react'
import Input from '../base/Input'
import { Search } from 'lucide-react'

const Searchbox = () => {
  return (
    <div className='flex justify-center items-center border border-primary-dark rounded-xl  px-3 py-2 shadow-md ' >
        <Input />
        <Search size={18} />
    </div>
  )
}

export default Searchbox