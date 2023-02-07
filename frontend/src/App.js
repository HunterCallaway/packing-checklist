import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import TripsListPage from './pages/TripsListPage';
import TripPage from './pages/TripPage';

/*
Notes:
1. We have to use the `exact` parameter with the TripsListPage route,
   because without it our routes would render TripsListPage
   whenever a "/" was present in the URL.
2. The dynamic `id` parameter needs to match the property we assigned
   to the `tripId` variable in TripPage.js.
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <div className='row justify-content-center'>
          <div className='col-10'>
            <Header />
          </div>
          <div className='col-10'>
            <Route path="/" exact component={TripsListPage} />
            <Route path="/trip/:id" component={TripPage} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
