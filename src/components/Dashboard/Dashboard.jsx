import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import image1 from '../../assets/images/image1.jpg'
import my1 from '../../assets/images/image2.jpg'
import umberall from '../../assets/images/umbrella-chair.jpg'
import FeaturedHotels from '../Featured_Hotels/FeaturedHotels'
import Reception from '../ReceptionBanner/Reception'

const Dashboard = () => {
  let carouselImage = [
    {
      img: image1,
      alt: 'Hotel 1',
    },
    {
      img: my1,
      alt: 'Hotel 2',
    },
    {
      img: umberall,
      alt: 'Hotel 3',
    },
  ]

  return (
    <>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-pink-100 via-orange-100 to-yellow-100 py-3 px-4 flex items-center justify-center shadow-sm">
        <h1 className="text-center text-pink-800 text-sm sm:text-lg font-semibold tracking-wide">
          🎉 Enjoy up to{' '}
          <span className="text-orange-600 font-bold">50% OFF</span> on your
          next stay – Limited Time Only!
        </h1>
      </div>

      {/* Carousel Section */}
      <div className="w-full mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-[250px] sm:h-[600px] custom-swiper"
        >
          {carouselImage.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FeaturedHotels />
      <Reception />
    </>
  )
}

export default Dashboard
