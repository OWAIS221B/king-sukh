import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, StarHalf } from '@mui/icons-material'
import feature_1 from '../../assets/images/image1.jpg'
import feature_2 from '../../assets/images/image2.jpg'
import umbrella from '../../assets/images/umbrella-chair.jpg'

const features = [
  {
    key: 1,
    img: feature_1,
    title: 'Grand Palace Hotel',
    desc: 'Experience world-class service in the heart of the city with breathtaking skyline views. Our elegant rooms and suites feature luxurious furnishings, modern amenities, and floor-to-ceiling windows. Whether you’re here for business or leisure, you’ll enjoy premium dining, a full-service spa, and a rooftop bar with panoramic cityscapes.',
    discount: '30% OFF',
    rating: 5,
    amenities: ['Beachfront', 'All-Inclusive', 'Bar', 'Gym', 'Private Balcony'],
    price: '$220/night',
  },
  {
    key: 2,
    img: feature_2,
    title: 'Ocean Breeze Resort',
    desc: 'Relax by the sea in our private beach resort with luxury spa and fine dining. Nestled along the pristine coastline, this tropical paradise offers beachside cabanas, curated wellness experiences, and romantic oceanfront dining. Wake up to the sound of waves and enjoy sunsets that paint the sky in vibrant colors.',
    discount: '25% OFF',
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
  {
    key: 3,
    img: umbrella,
    title: 'Highland Retreat',
    desc: 'A peaceful mountain getaway with cozy rooms and scenic hiking trails. Tucked away in a forested hillside, Highland Retreat is your perfect escape from the city. Enjoy mornings by the fireplace, afternoon walks through pine trails, and nights under starry skies. Ideal for couples, adventurers, and anyone seeking tranquility.',
    discount: '20% OFF',
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
]

// ⭐️ Star Rendering Helper
const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  return (
    <div className="flex items-center space-x-1 text-yellow-500 mb-2">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <Star key={i} fontSize="small" />
        ))}
      {hasHalfStar && <StarHalf fontSize="small" />}
    </div>
  )
}

const HotelsDetails = () => {
  const [selectedData, setSelectedData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const hotel = features.find((item) => item.key === parseInt(id))
    setSelectedData(hotel)
  }, [id])

  if (!selectedData) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Loading hotel details...
      </div>
    )
  }

  return (
    <div className="px-4 md:px-16 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={selectedData.img}
          alt={selectedData.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-[orangered] mb-2">
            {selectedData.title}
          </h1>
          {renderStars(selectedData.rating)}
          <p className="text-[#000000] mb-4">{selectedData.desc}</p>
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-1">Amenities:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {selectedData.amenities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-xl font-semibold text-gray-800 mb-2">
            Price:{' '}
            <span className="text-[orangered]">{selectedData.price}</span>
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
