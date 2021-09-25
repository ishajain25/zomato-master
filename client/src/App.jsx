import { Route, Redirect } from "react-router-dom";

//import HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

//Component
import Temp from "./Components/temp";

// pages
import Home from "./Page/Home.jsx";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline.jsx"

function App() {
  return (
    <> 
        <Route path="/" exact>
        <Redirect to="/delivery" />
        </Route>

        <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
        </Route>

        <HomeLayoutHOC path="/:type" exact component={Home} /> 
        
        <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC 
        path="/restaurant/:id/menu" 
        exact 
        component={Temp} 
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Temp}
      /> 
    </>
  );
}

export default App;
