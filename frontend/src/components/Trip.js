import React from 'react';
import dateFormat from 'dateformat';

const Trip = ({ trip }) => {
  return (
    <div>
      <h3>{trip.destination}</h3>
      <h4>Leaving: {dateFormat(trip.leave_date, "dddd, mmmm d, yyyy")}</h4>
      <h4>Returning: {dateFormat(trip.return_date, "dddd, mmmm d, yyyy")}</h4>
    </div>
  )
}

export default Trip