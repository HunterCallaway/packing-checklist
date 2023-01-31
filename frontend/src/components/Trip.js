import React from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

const Trip = ({ trip }) => {
  return (
    <div className='container text-center'>
      <Card className='row justify-content-md-center'>
        <Card.Body>
          <Link to={`/trip/${trip.id}/`}>
            <h3>{trip.destination}</h3>
            <h4>Leaving: {dateFormat(trip.leave_date, "dddd, mmmm d, yyyy")}</h4>
            <h4>Returning: {dateFormat(trip.return_date, "dddd, mmmm d, yyyy")}</h4>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Trip