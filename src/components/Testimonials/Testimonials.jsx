import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import test1 from '../../assets/images/test1.jpg'
import test2 from '../../assets/images/test2.jpg'
import test3 from '../../assets/images/test3.jpg'

const testimonials = [
  {
    image: test1,
    quote:
      'This hotel exceeded my expectations. Impeccable service, clean rooms, and a fantastic location!',
    name: 'Emily R.',
    title: 'Business Traveler',
    rating: 5,
  },
  {
    image: test2,
    quote:
      'From check-in to check-out, everything was smooth. The staff was courteous and very helpful.',
    name: 'Jason M.',
    title: 'Vacation Guest',
    rating: 4.5,
  },
  {
    image: test3,
    quote:
      'A truly relaxing stay. The amenities were top-notch, and the room had a beautiful view.',
    name: 'Priya K.',
    title: 'Family Visitor',
    rating: 5,
  },
]

const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0

  return (
    <div className="flex justify-center text-[orangered] mb-2">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <StarIcon key={i} fontSize="small" />
        ))}
      {halfStar && <StarHalfIcon fontSize="small" />}
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className="mt-18 mb-20 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-[orangered] text-center mb-8 font-roboto">
        What Our Guests Say
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-[orangered]"
            />
            {renderStars(testimonial.rating)}
            <p className="text-[#2e7d32] text-sm leading-relaxed italic mb-4">
              “{testimonial.quote}”
            </p>
            <h3 className="text-[orangered] font-semibold">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 text-xs">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
