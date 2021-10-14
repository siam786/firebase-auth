import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from "./Pages/Notfound/Notfound";
import Booking from "./Pages/Home/Booking/Booking";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:bookingId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <Notfound/>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
