import React, { useEffect, useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const TripEditor = ({ trip, handleSubmit }) => {

  const [destination, setDestination] = useState('');

  const [leaveDate, setLeaveDate] = useState('');

  const [returnDate, setReturnDate] = useState('');

  useEffect(() => {
    if(trip) {
      setDestination(trip.destination);
      setLeaveDate(trip.leave_date);
      setReturnDate(trip.return_date)
    }
  }, [trip]);

  const onTrigger = (e) => {
    e.preventDefault();
    //Pass the updated values as an argument 
    // to TripPage's `handleSubmit` function.
    handleSubmit({destination, leaveDate, returnDate});
  };

  return (
    <div className="row">
      <Form id="trip-update" onSubmit={onTrigger}>
        <Form.Group className="mb-2">
          <h2>
            <Form.Label>
              Destination
            </Form.Label>
          </h2>
          <Form.Control
          size="lg"
          value={destination}
          onChange={e =>
            setDestination(e.target.value)
          }
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <h2>
            <Form.Label>
              Leave Date
            </Form.Label>
          </h2>
          <Form.Control
          size="lg"
          value={leaveDate}
          onChange={e => 
            setLeaveDate(e.target.value)
          }
          />
        </Form.Group>
        <Form.Group>
          <h2>
            <Form.Label>
              Return Date
            </Form.Label>
          </h2>
          <Form.Control
          size="lg" 
          value={returnDate}
          onChange={e => 
            setReturnDate(e.target.value)
          }
          />
        </Form.Group>
        <Button
         className="custom-button mt-3" 
         type="submit"
         >Update Your Trip</Button>
      </Form>
    </div>
  )
}

export default TripEditor