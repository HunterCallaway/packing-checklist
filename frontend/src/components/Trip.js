import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';


const Trip = ({ trip }) => {
  return (
    <Link to={`/trip/${trip.id}/`}>
      <div className='fs-1 fw-bold'>{trip.destination}</div>
      <div className='fs-2 fw-bold'>Leaving: {dateFormat(trip.leave_date, "dddd, mmmm d, yyyy")}</div>
      <div className='fs-2 fw-bold'>Returning: {dateFormat(trip.return_date, "dddd, mmmm d, yyyy")}</div>
    </Link> 
  )
}

export default Trip