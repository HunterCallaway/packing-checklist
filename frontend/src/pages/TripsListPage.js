import React, {useEffect, useState} from 'react';
import Trip from '../components/Trip';

import Card from 'react-bootstrap/Card';

/*
DRY Notes:
1. Since there won't initially be any data,
   the initial state of our trips should be an empty array.
2a. If we don't use the `await` operator in the `getTrips` function,
    we will receive a Promise that isn't the data itself.
2b. We need to wait until the previous `fetch()` method has finished
    before we parse the body text as JSON.
*/

const TripsListPage = () => {

  let [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  //Returns all Trip instances.
  let getTrips = async () => {
    let response = await fetch('/api/trips/');
    let data = await response.json();
    setTrips(data);
  };

  return (
    <div className='trips'>
      <div className='trips-header text-center fw-bold fs-1'>My Trips</div>
      <div className='trips-list'>
        {trips.map((trip, index) =>
          <Card className='text-center my-3'>
            <Card.Body>
              <Trip key={index} trip={trip} />
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  )
}

export default TripsListPage