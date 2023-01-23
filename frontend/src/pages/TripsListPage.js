import React, {useEffect, useState} from 'react';
import dateFormat from 'dateformat';

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
    let response = await fetch('http://127.0.0.1:8000/api/trips/');
    let data = await response.json();
    setTrips(data);
  };

  return (
    <div>
      <div className='trips-list'>
        {trips.map((trip, index) =>
          <div key={index}>
            <h3>{trip.destination}</h3>
            <h4>Leaving: {dateFormat(trip.leave_date, "dddd, mmmm d, yyyy")}</h4>
            <h4>Returning: {dateFormat(trip.return_date, "dddd, mmmm d, yyyy")}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default TripsListPage