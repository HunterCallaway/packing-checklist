import React, { useState, useEffect } from 'react';
import Trip from '../components/Trip';
import TripEditor from '../components/TripEditor'
import TripEditButton from '../components/TripEditButton';

import Card from 'react-bootstrap/Card';

// const TripEditorComponent = lazy(() => import('../components/TripEditor'));

/*
Notes:
1. `match` objects contain information about how a <Route path>
   matched the URL.
2. The `id` property needs to match the dynamic parameter
   in the route in App.js.
3. Our `useState` hook receives `null` as a parameter,
   because there shouldn't be a value until we set state.
4.a. The `load` variable will cause the Trip component to render first.
  b. When the user clicks on the TripEditButton, the state will update,
     and TripEditor will be rendered.
*/

const TripPage = ({ match }) => {

  let tripId = match.params.id;

  let [trip, setTrip] = useState(null);

  const [load, setLoad] = useState('start');

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
          {trip && load==='start' &&
            (
              <div>
                <Trip trip={trip} />
                <button
                  onClick={() => {
                    setLoad('edit-trip')
                  }}
                >
                  <TripEditButton />
                </button>
              </div>
            )
        }
          {load==='edit-trip' && <TripEditor trip={trip} />}
        </Card.Body>
      </Card>
    </div>
  )
}

export default TripPage