import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import { FavoriteBorderOutlined, Visibility } from '@mui/icons-material'
import feature_1 from '../../assets/images/image1.jpg'
import feature_2 from '../../assets/images/image2.jpg'
import umbrella from '../../assets/images/umbrella-chair.jpg'

const FeaturedHotels = () => {
  const features = [
    {
      key: 1,
      img: feature_1,
      title: 'Grand Palace Hotel',
      desc: 'Experience world-class service in the heart of the city with breathtaking skyline views.',
      discount: '30% OFF',
      icon: <FavoriteBorderOutlined fontSize="small" />,
      view: <Visibility fontSize="small" />,
    },
    {
      key: 2,
      img: feature_2,
      title: 'Ocean Breeze Resort',
      desc: 'Relax by the sea in our private beach resort with luxury spa and fine dining.',
      discount: '25% OFF',
      icon: <FavoriteBorderOutlined fontSize="small" />,
      view: <Visibility fontSize="small" />,
    },
    {
      key: 3,
      img: umbrella,
      title: 'Highland Retreat',
      desc: 'A peaceful mountain getaway with cozy rooms and scenic hiking trails.',
      discount: '20% OFF',
      icon: <FavoriteBorderOutlined fontSize="small" />,
      view: <Visibility fontSize="small" />,
    },
  ]

  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-center text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent tracking-wide leading-tight mt-6 mb-3">
        Exclusive Hotel Highlights
      </h1>

      <hr className="w-48 mx-auto border-t-4 border-pink-400 rounded-full mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-12">
        {features.map((item) => (
          <Link to="" key={item.key}>
            <Card feature={item} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedHotels
