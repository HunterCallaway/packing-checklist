import React from 'react'

const TripEditor = ({ trip }) => {

  return (
    <div>
      <textarea name="tripDestination" 
      defaultValue={trip.destination}>
      </textarea>
    </div>
  )
}

export default TripEditor