import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Error404 from './Error404';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/create">
                <Create />
              </Route>
              <Route exact path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route exact path="*">
                <Error404 />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;