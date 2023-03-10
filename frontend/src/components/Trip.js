import React from 'react';
import dateFormat from 'dateformat';
import TripEditButton from '../components/TripEditButton';


const Trip = ({ trip }) => {
  return (
    <div>
      <div className='fs-1 fw-bold'>{trip.destination}</div>
      <div className='fs-2 fw-bold'>Leaving: {dateFormat(trip.leave_date, "dddd, mmmm d, yyyy")}</div>
      <div className='fs-2 fw-bold'>Returning: {dateFormat(trip.return_date, "dddd, mmmm d, yyyy")}</div>
      <TripEditButton trip={trip} />
    </div> 
  )
}

export default Trip