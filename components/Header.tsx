'use client'
import React from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

const Header = () => {
	const filteredItems = [
		{
			id: 1,
			img: '/assets/scale_2400.png',
		},
		{
			id: 2,
			img: '/assets/actions_pic_39.jpg',
		},
		{
			id: 3,
			img: '/assets/bez-imeni-1-7-1024x424-1.jpg',
		},
	]

	return (
		<Carousel>
			<CarouselContent>
				{filteredItems.map(item => (
					<CarouselItem key={item.id}>
						<img
							src={item.img}
							alt='banner'
							width={1000}
							height={400}
							className='w-full h-[200px] md:h-[600px] object-cover rounded-2xl'
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default Header
