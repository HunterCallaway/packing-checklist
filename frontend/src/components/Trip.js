import React from 'react';


const Trip = ({ trip }) => {
  return (
    <div>
      <div className='fs-1 fw-bold'>{trip.destination}</div>
      <div className='fs-2 fw-bold'>Leaving: {trip.leave_date}</div>
      <div className='fs-2 fw-bold'>Returning: {trip.return_date}</div>
    </div> 
  )
}

export default Trip