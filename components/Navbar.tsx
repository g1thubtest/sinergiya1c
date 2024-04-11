'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ShoppingBag } from 'lucide-react'

const Navbar = () => {
	return (
		<div className='p-5 shadow-sm flex justify-between'>
			<div className='flex items-center gap-8'>
				<Image src='/logo.png' alt='logo' width={150} height={100} />
			</div>
			<nav className='flex items-center gap-[35px] cursor-pointer list-none'>
				<li key='catalog' className='hover:border-b-[0.5px]'>
					Каталог
				</li>
				<li key='about' className='hover:border-b-[0.5px]'>
					О нас
				</li>
				<li key='contacts' className='hover:border-b-[0.5px]'>
					Контакты
				</li>
			</nav>
			<div className='flex gap-5 items-center justify-between'>
				<h2 className='flex gap-2 items-center text-lg'>
					<ShoppingBag />0
				</h2>
			</div>
		</div>
	)
}

export default Navbar
