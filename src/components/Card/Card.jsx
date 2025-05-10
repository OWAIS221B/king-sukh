import { Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import React from 'react'

const Card = ({ feature: { img, title, desc, discount, icon, view } }) => {
  return (
    <div className="relative overflow-hidden rounded-md shadow-md border border-gray-200 cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white">
      {discount && (
        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-medium px-2 py-1.5 rounded-tr-lg rounded-bl-lg shadow-md z-10">
          <span>{discount}</span>
        </div>
      )}

      <img
        src={img}
        alt={title}
        className="w-full h-96 
          object-cover
         rounded-t-lg transition-transform duration-500 transform group-hover:scale-110"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
          {title}
        </h2>
        {desc && (
          <p className="mt-2 text-sm lg:text-base text-gray-300 text-center px-4">
            {desc}
          </p>
        )}

        {view && (
          <Button
            startIcon={<VisibilityIcon />}
            size="small"
            sx={{
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.7)',
              padding: '5px 15px',
              borderRadius: '5px',
              textTransform: 'none',
              fontSize: '12px',
              marginTop: 1,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.9)',
              },
            }}
          >
            View
          </Button>
        )}
      </div>

      {icon && (
        <div className="absolute top-2 right-2 text-white text-2xl opacity-0 transition-opacity duration-500 transform group-hover:opacity-100 group-hover:scale-105 hover:text-red-500">
          <span>{icon}</span>
        </div>
      )}
    </div>
  )
}

export default Card
