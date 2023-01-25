import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import TripsListPage from './pages/TripsListPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" exact component={TripsListPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
