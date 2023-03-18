import React, { useState, useEffect, lazy, useTransition } from 'react';
import Trip from '../components/Trip';
import TripEditButton from '../components/TripEditButton';

import Card from 'react-bootstrap/Card';

const TripEditorComponent = lazy(() => import('../components/TripEditor'));

/*
Notes:
1. `match` objects contain information about how a <Route path>
   matched the URL.
2. The `id` property needs to match the dynamic parameter
   in the route in App.js.
3. Our `useState` hook receives `null` as a parameter,
   because there shouldn't be a value until we set state.
*/

const TripPage = ({ match }) => {

  let tripId = match.params.id;

  let [trip, setTrip] = useState(null);

  const [, startTransition] = useTransition();

  const [load, setLoad] = useState(false);

  useEffect(() => {
    getTrip();
  }, [tripId]);

  //This function will retrieve a single, specified Trip.
  let getTrip = async () => {
    let response = await fetch(`/api/trips/${tripId}/`);
    let data = await response.json();
    setTrip(data);
  };

   //This function will save any changes to the backend.
  let updateTrip = async () => {
    fetch(`/api/trips/${tripId}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip)
    });
  };

  return (
    <div className='my-5'>
      <Card style={{height: '25rem'}} className='d-flex'>
        <Card.Body className='align-items-center d-flex justify-content-center text-center'>
          {trip ?
            <div>
              <Trip trip={trip} />
              <button
                onClick={() => {
                  startTransition(() => setLoad(true))
                }}
              >
                <TripEditButton />
              </button>
              {load && <TripEditorComponent trip={trip} />}
            </div>
            : 'Hmmm. Something went wrong.' }
        </Card.Body>
      </Card>
    </div>
  )
}

export default TripPage