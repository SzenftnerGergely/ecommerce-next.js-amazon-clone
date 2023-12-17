import Link from 'next/link'
import React from 'react'
import logo from "@/assets/logo.png"
import Image from 'next/image'
import { redirect } from 'next/navigation'

async function searchProducts(formData:FormData) {
    "use server"

    const searchQuery = formData.get("searchQuery")?.toString()

    if(searchQuery) {
        redirect("/search?query=" + searchQuery)
    }
}

const Navbar = () => {
  return (
    <div className='bg-base-100'>
        <div className='navbar max-w-7xl m-auto flex-col sm:flex-row gap-2'>
            <div className='flex-1'>
                <Link href="/" className='btn btn-ghost text-xl normal-case'>
                    <Image src={logo} alt='Logo' width={40} height={40} />
                    Junkyard
                </Link>
            </div>
            <div className='flex-none gap-2'>
                <form action={searchProducts}>
                    <div className='form-control'>
                        <input 
                            name="searchQuery" 
                            placeholder='Search'
                            className='input input-bordered w-full min-w-[100px]'
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Navbar
