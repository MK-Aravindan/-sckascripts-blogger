import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/edit/:id" component={EditBlog} />
            <Route exact path="/blogs/:id" component={BlogDetails} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
