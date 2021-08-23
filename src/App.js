import logo from './logo.svg';
import './App.css';
import Convert from './components/currencyChange';
import HotelBook from './components/hotelBook';
import AcceptFor from './components/acceptForm';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      {/* <Convert/> */}
      {/* <HotelBook/> */}
      <Switch>
        <Route exact path='/'>
        <HotelBook/>
        </Route>
        <Route exact path='/book'>
          <AcceptFor />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
