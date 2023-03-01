import React from 'react'

import { Link } from 'react-router-dom'

const TripEditButton = ({ trip }) => {
  return (
    <div className='pt-2'>
      <Link to={`/trip/${trip.id}/update/`}>
        <ion-icon name="pencil"></ion-icon>
      </Link>
    </div>
  )
}

export default TripEditButton