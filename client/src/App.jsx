import { Route, Redirect } from "react-router-dom";

//import HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

//Component
import Temp from "./Components/temp";

// pages
import Home from "./Page/Home.jsx";

function App() {
  return (
    <> 
        <Route path="/" exact>
        <Redirect to="/delivery" />
        </Route>
        <HomeLayoutHOC path="/:type" exact component={Home} />   
    </>
  );
}

export default App;
