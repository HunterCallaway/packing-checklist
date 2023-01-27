import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

const Trip = ({ trip }) => {
  return (
    <Link to={`/trip/${trip.id}/`}>
      <h3>{trip.destination}</h3>
      <h4>Leaving: {dateFormat(trip.leave_date, "dddd, mmmm d, yyyy")}</h4>
      <h4>Returning: {dateFormat(trip.return_date, "dddd, mmmm d, yyyy")}</h4>
    </Link>
  )
}

export default Trip