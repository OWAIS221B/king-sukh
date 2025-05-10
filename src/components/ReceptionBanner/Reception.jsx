import React from 'react'
import rece from '../../assets/images/rec.jpg'
import { Button } from '@mui/material'

const Reception = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-10 w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={rece}
          alt="Child"
          className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-[#f9f9f9] p-8 md:p-12 flex flex-col  sm:space-y-2">
        <div className="space-y-2 p-2 -mt-4 sm:mt-0">
          <h1 className="sm:text-3xl text-2xl font-bold text-[#003366] font-roboto">
            EXPERIENCE HOSPITALITY
          </h1>
          <h2 className="sm:text-3xl text-xl font-semibold text-[orangered] font-roboto">
            Your Comfort Is Our Priority
          </h2>
          <p className="sm:text-base text-sm text-[#000000] leading-relaxed font-roboto">
            Welcome to our premier hotel, where luxury meets convenience. From
            elegant rooms to personalized service, we ensure a seamless stay
            tailored to your needs.
          </p>
          <p className="sm:text-base text-sm text-[#000000] leading-relaxed mt-4 font-roboto">
            Whether you're here for business or leisure, our dedicated team is
            committed to delivering an exceptional guest experience in a serene
            and sophisticated setting.
          </p>
          <p className="sm:text-base text-sm text-[#000000] leading-relaxed mt-4 font-roboto">
            Discover our top-tier amenities, central location, and unmatched
            hospitality that make every stay truly memorable.
          </p>
        </div>

        <Button
          variant="contained"
          className="!capitalize text-white sm:self-start self-center"
          sx={{
            backgroundColor: 'orangered',
            '&:hover': { backgroundColor: '#002244' },
            letterSpacing: '0.05em',
            width: 170,
            marginTop: 7,
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  )
}

export default Reception
