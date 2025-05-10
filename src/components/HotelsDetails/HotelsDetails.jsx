import React from 'react'
import { useParams } from 'react-router-dom'
import { Star, StarHalf } from '@mui/icons-material'
import image1 from '../../assets/images/image1.jpg'

const hotelData = {
  1: {
    name: 'Grand Palace Hotel',
    image: image1,
    description:
      'Experience world-class service in the heart of the city with breathtaking skyline views and unmatched hospitality.',
    rating: 4.5,
    amenities: [
      'Free WiFi',
      'Breakfast Included',
      'Spa',
      'Swimming Pool',
      'Airport Shuttle',
    ],
    price: '$180/night',
  },
  2: {
    name: 'Ocean Breeze Resort',
    image: image1,
    description:
      'Relax by the sea in our private beach resort with luxury spa, fine dining, and sunset views you’ll never forget.',
    rating: 5,
    amenities: ['Beachfront', 'All-Inclusive', 'Bar', 'Gym', 'Private Balcony'],
    price: '$220/night',
  },
  3: {
    name: 'Highland Retreat',
    image: image1,
    description:
      'A peaceful mountain getaway with cozy rooms, fresh air, and scenic hiking trails to help you unwind.',
    rating: 4,
    amenities: [
      'Mountain View',
      'Hiking Trails',
      'Free Parking',
      'Fireplace',
      'Pet Friendly',
    ],
    price: '$150/night',
  },
}

const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0

  return (
    <div className="flex items-center space-x-1 text-yellow-500 mb-2">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <Star key={i} fontSize="small" />
        ))}
      {halfStar && <StarHalf fontSize="small" />}
    </div>
  )
}

const HotelsDetails = () => {
  const { id } = useParams()
  const hotel = hotelData[id]

  if (!hotel) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Hotel not found
      </div>
    )
  }

  return (
    <div className="px-4 md:px-16 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-[orangered] mb-2">
            {hotel.name}
          </h1>
          {renderStars(hotel.rating)}
          <p className="text-black mb-4">{hotel.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-1">Amenities:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {hotel.amenities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-xl font-semibold text-gray-800 mb-2">
            Price: <span className="text-[orangered]">{hotel.price}</span>
          </div>
          <button className="mt-4 bg-[orangered] hover:bg-red-500 text-white px-6 py-2 rounded-md shadow-sm transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelsDetails
