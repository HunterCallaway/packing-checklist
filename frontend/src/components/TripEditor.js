import React, {useState} from 'react'

import Form from 'react-bootstrap/Form';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import dateFormat from 'dateformat';


const TripEditor = ({ trip }) => {

  const [destination, setDestination] = useState(trip.destination);

  const [leaveDate, setLeaveDate] = useState(new Date(trip.leave_date));

  const [returnDate, setReturnDate] = useState(new Date(trip.return_date));

  return (
    <div className="row">
      <Form>
        <Form.Group className="mb-2">
          <h2>
            <Form.Label>
              Destination
            </Form.Label>
          </h2>
          <Form.Control
          size="lg" 
          type="text" 
          placeholder={destination} 
          onChange={e => setDestination(e.target.value)} 
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <h2>
            <Form.Label>
              Leave Date
            </Form.Label>
          </h2>
            <DatePicker
            showPopperArrow={false}
            onChange={(date) => setLeaveDate(date)}
            selected={leaveDate}
            dateFormat="MMMM d, yyyy"
            className="leave-date-calendar"
            />
        </Form.Group>
        <Form.Group>
          <h2>
            <Form.Label>
              Return Date
            </Form.Label>
          </h2>
          <DatePicker
          showPopperArrow={false} 
          onChange={(date) => setReturnDate(date)}
          selected={returnDate}
          dateFormat="MMMM d, yyyy"
          className="return-date-calendar"
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default TripEditor