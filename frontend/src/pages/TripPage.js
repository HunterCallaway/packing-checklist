import React, { useState, useEffect } from 'react';
import dateFormat from 'dateformat';

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

  useEffect(() => {
    getTrip();
  }, [tripId]);

  let getTrip = async () => {
    let response = await fetch(`/api/trips/${tripId}/`);
    let data = await response.json();
    setTrip(data);
  };

  return (
    <div>
      <h2>{trip?.destination}</h2>
      <p>Leaving: {dateFormat(trip?.leave_date, "dddd, mmmm d, yyyy")}</p>
      <p>Returning: {dateFormat(trip?.return_date, "dddd, mmmm d, yyyy")}</p>
    </div>
  )
}

export default TripPage