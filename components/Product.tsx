'use client'
import React from 'react'
import { Button } from './ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog'

import ProductDetails from './ProductDetails'

interface Item {
	id: number
	img: string
	title: string
	price: number
	description: string
	category: string
}

interface ProductProps {
	item: Item
}

const Product: React.FC<ProductProps> = ({ item }) => {
	const [open, setOpen] = React.useState(false)

	const handleOpen = () => setOpen(!open)
	return (
		<>
			<div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer'>
				<img
					src={item.img}
					alt=''
					width={500}
					height={200}
					className='h-[200px] w-[200px] object-contain'
				/>
				<h2 className='hidden md:block text-center font-bold text-lg'>
					{item.title}
				</h2>
				<h2 className='text-center font-bold'>от {item.price} руб.</h2>

				<Dialog>
					<DialogTrigger asChild>
						<Button
							variant='outline'
							className='text-black hover:text-white hover:bg-black'
						>
							Подробнее
						</Button>
					</DialogTrigger>
					<DialogContent className='bg-white'>
						<DialogHeader>
							<DialogDescription>
								<ProductDetails item={item} />
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</>
	)
}

export default Product
