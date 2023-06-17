import React, { useState, useEffect } from 'react';
import Trip from '../components/Trip';
import TripEditor from '../components/TripEditor'
import TripEditButton from '../components/TripEditButton';

import Card from 'react-bootstrap/Card';

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

const TripPage = ({ match, history, getTrips }) => {

  let tripId = match.params.id;

  let [trip, setTrip] = useState(null);

  const [load, setLoad] = useState('start');

  //This function will retrieve a single, specified Trip.
  let getTrip = async () => {
    let response = await fetch(`/api/trips/${tripId}/`);
    let data = await response.json();
    setTrip(data);
  };

  useEffect(() => {
    getTrip();
  }, [tripId]);

   //This function will save any changes to the backend.
  let updateTrip = async (updatedValues) => {

    const updatedTrip = {
      ...trip,
      destination: updatedValues.destination,
      leave_date: updatedValues.leaveDate,
      return_date: updatedValues.returnDate
    };

    try {
      const response = await fetch(`/api/trips/${tripId}/update/`, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(updatedTrip)
      });
      if(response.ok) {
        //Update the trip object in the local state.
        setTrip(updatedTrip);
        //Redirect to the TripsListPage after updating the Trip.
        history.push('/');
      } else {
        //Handle the error case if necessary.
        console.log('Failed to update the trip.')
      }
    } catch (error) {
      //Handle the exception/error case if necessary.
      console.error(error);
    }
  };


  return (
    <div className='my-5'>
      <Card style={{height: '27rem'}} className='d-flex'>
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
          {load==='edit-trip' && <TripEditor trip={trip} handleSubmit={updateTrip} />}
        </Card.Body>
      </Card>
    </div>
  )
}

export default TripPage