import React from 'react'

export const Card = ({img , name , gender}) => {
  return (
     
<div className="flex items-center bg-gray-200 shadow-lg p-4 mb-4 rounded-lg">
      <div className="mr-4">
        <img className="w-32 h-32 object-cover rounded-lg" src={img} alt={name} />
      </div>
      <div>
        <p className="text-xl font-semibold">{name}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}