import React, {useEffect, useState} from 'react'

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
      Your Upcoming Trips
    </div>
  )
}

export default TripsListPage