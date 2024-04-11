import React from 'react'
import { Button } from './ui/button'

interface Item {
	id: number
	img: string
	title: string
	price: number
	description: string
	category: string
}

interface ProductDetailsProps {
	item: Item
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ item }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black'>
			<img src={item.img} alt='' width={300} height={300} />
			<div className='flex flex-col gap-3'>
				<h2 className='text-2xl font-bold'>{item.title}</h2>
				<h2 className='text-2xl font-bold'>от {item.price} руб.</h2>
				<Button
					variant='outline'
					className='flex gap-3 text-black hover:text-white hover:bg-black'
				>
					В корзину
				</Button>
				<h2 className='text-sm text-gray-500'>{item.description}</h2>
			</div>
		</div>
	)
}

export default ProductDetails
